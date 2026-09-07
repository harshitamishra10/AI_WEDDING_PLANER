import ffmpegPath from "@ffmpeg-installer/ffmpeg";
import ffmpeg from "fluent-ffmpeg";
import fs from "fs";
import path from "path";
import os from "os";
import https from "https";

import VideoProject from "../models/VideoProject.js";
import { generateCinematicPrompt } from "../utils/videoPromptGenerator.js";
import { uploadVideoFile } from "./cloudinaryService.js";
import { startRunwayGeneration, checkRunwayStatus } from "./providers/runwayProvider.js";
import { startKlingGeneration, checkKlingStatus } from "./providers/klingProvider.js";

ffmpeg.setFfmpegPath(ffmpegPath.path);

const PROVIDER = process.env.AI_VIDEO_PROVIDER || "runway"; // "runway" | "kling"

function startGeneration(imageUrl, prompt) {
  return PROVIDER === "kling"
    ? startKlingGeneration(imageUrl, prompt)
    : startRunwayGeneration(imageUrl, prompt);
}

function checkStatus(taskId) {
  return PROVIDER === "kling" ? checkKlingStatus(taskId) : checkRunwayStatus(taskId);
}

/**
 * Kick off one AI generation task per uploaded image.
 * Saves task ids on the project so status polling can resume them later.
 */
export async function startAllClipGenerations(project) {
  const prompt = generateCinematicPrompt(project.videoStyle);

  const aiTasks = [];
  for (const imageUrl of project.images) {
    try {
      const taskId = await startGeneration(imageUrl, prompt);
      aiTasks.push({ imageUrl, taskId, status: "processing" });
    } catch (error) {
      aiTasks.push({ imageUrl, taskId: null, status: "failed" });
      console.log("Clip generation start failed for image:", imageUrl, error.message);
    }
  }

  project.aiTasks = aiTasks;
  project.aiProvider = PROVIDER;
  project.generationStatus = "generating";
  project.statusMessage = "Generating cinematic scenes...";
  await project.save();

  return project;
}

/**
 * Poll every in-progress clip task for a project, updating clipUrl as they
 * complete. Once every task is done, kicks off final video assembly.
 * Returns the refreshed project.
 */
export async function pollAndAdvanceProject(projectId) {
  const project = await VideoProject.findById(projectId);
  if (!project) return null;

  if (project.generationStatus === "completed" || project.generationStatus === "failed") {
    return project;
  }

  let allDone = true;

  for (const task of project.aiTasks) {
    if (task.status === "completed" || task.status === "failed" || !task.taskId) continue;

    try {
      const result = await checkStatus(task.taskId);
      if (result.status === "completed") {
        task.status = "completed";
        task.clipUrl = result.videoUrl;
      } else if (result.status === "failed") {
        task.status = "failed";
      } else {
        allDone = false;
      }
    } catch (error) {
      console.log("Status check error for task:", task.taskId, error.message);
      allDone = false;
    }
  }

  await project.save();

  const successfulClips = project.aiTasks
    .filter((t) => t.status === "completed" && t.clipUrl)
    .map((t) => t.clipUrl);

  if (allDone) {
    if (successfulClips.length === 0) {
      project.generationStatus = "failed";
      project.errorMessage = "All clip generations failed. Please try again.";
      await project.save();
      return project;
    }

    project.generatedClips = successfulClips;
    project.statusMessage = "Adding transitions and finishing your film...";
    await project.save();

    await assembleFinalVideo(project);
  }

  return VideoProject.findById(projectId);
}

/**
 * Download a remote file to a local temp path.
 */
function downloadToTemp(url, destPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    https
      .get(url, (response) => {
        response.pipe(file);
        file.on("finish", () => file.close(() => resolve(destPath)));
      })
      .on("error", (err) => {
        fs.unlink(destPath, () => reject(err));
      });
  });
}

/**
 * Download all generated clips, concatenate them, then upload the
 * final film to Cloudinary.
 */
async function assembleFinalVideo(project) {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "wedai-video-"));

  try {
    const localClipPaths = [];
    for (let i = 0; i < project.generatedClips.length; i++) {
      const dest = path.join(tempDir, `clip-${i}.mp4`);
      await downloadToTemp(project.generatedClips[i], dest);
      localClipPaths.push(dest);
    }

    const outputPath = path.join(tempDir, "final.mp4");

    await new Promise((resolve, reject) => {
      const command = ffmpeg();
      localClipPaths.forEach((clipPath) => command.input(clipPath));

      command
        .on("error", reject)
        .on("end", resolve)
        .mergeToFile(outputPath, tempDir);
    });

    const uploadResult = await uploadVideoFile(outputPath);

    project.finalVideoUrl = uploadResult.secure_url;
    project.generationStatus = "completed";
    project.statusMessage = "Your wedding film is ready!";
    await project.save();
  } catch (error) {
    console.log("Final video assembly error:", error);
    project.generationStatus = "failed";
    project.errorMessage = "Something went wrong while assembling your final video.";
    await project.save();
  } finally {
    fs.rm(tempDir, { recursive: true, force: true }, () => {});
  }
}
