import VideoProject from "../models/VideoProject.js";
import { uploadMultipleImages } from "../services/cloudinaryService.js";
import {
  startAllClipGenerations,
  pollAndAdvanceProject,
} from "../services/videoGenerationService.js";

/* ------------------------------------------------------------------ */
/* Upload multiple wedding images to Cloudinary                        */
/* ------------------------------------------------------------------ */
export const uploadVideoImages = async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ success: false, message: "Please upload at least one image." });
    }

    const imageUrls = await uploadMultipleImages(req.files, "wedai/video-planning");

    res.status(200).json({ success: true, images: imageUrls });
  } catch (error) {
    console.log("Upload Video Images Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

/* ------------------------------------------------------------------ */
/* Create a project and start AI generation                            */
/* ------------------------------------------------------------------ */
export const generateVideo = async (req, res) => {
  try {
    const { images, videoStyle, coupleNames, weddingDate, customMessage, title } = req.body;

    if (!images || images.length === 0) {
      return res.status(400).json({ success: false, message: "No images provided." });
    }
    if (!videoStyle) {
      return res.status(400).json({ success: false, message: "Please select a video style." });
    }
    if (!coupleNames || !coupleNames.trim()) {
      return res.status(400).json({ success: false, message: "Couple names are required." });
    }

    const project = await VideoProject.create({
      user: req.user.id,
      title: title || `${coupleNames}'s Wedding Film`,
      images,
      videoStyle,
      coupleNames,
      weddingDate: weddingDate || null,
      customMessage: customMessage || "",
      generationStatus: "processing",
      statusMessage: "Preparing your wedding story...",
    });

    res.status(201).json({ success: true, project });

    // Kick off generation asynchronously — the client will poll for status
    // rather than waiting on this request.
    startAllClipGenerations(project).catch((error) => {
      console.log("Start generation error:", error);
    });
  } catch (error) {
    console.log("Generate Video Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

/* ------------------------------------------------------------------ */
/* Get all video projects for the logged-in user                       */
/* ------------------------------------------------------------------ */
export const getMyVideos = async (req, res) => {
  try {
    const projects = await VideoProject.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, projects });
  } catch (error) {
    console.log("Get My Videos Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

/* ------------------------------------------------------------------ */
/* Get a single video project (ownership enforced)                     */
/* ------------------------------------------------------------------ */
export const getVideoById = async (req, res) => {
  try {
    const project = await VideoProject.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ success: false, message: "Video project not found." });
    }
    if (project.user.toString() !== req.user.id) {
      return res.status(403).json({ success: false, message: "Not authorized." });
    }

    res.status(200).json({ success: true, project });
  } catch (error) {
    console.log("Get Video Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

/* ------------------------------------------------------------------ */
/* Check / advance generation status (called by frontend polling)      */
/* ------------------------------------------------------------------ */
export const getVideoStatus = async (req, res) => {
  try {
    const existing = await VideoProject.findById(req.params.id);

    if (!existing) {
      return res.status(404).json({ success: false, message: "Video project not found." });
    }
    if (existing.user.toString() !== req.user.id) {
      return res.status(403).json({ success: false, message: "Not authorized." });
    }

    const project = await pollAndAdvanceProject(req.params.id);

    res.status(200).json({
      success: true,
      generationStatus: project.generationStatus,
      statusMessage: project.statusMessage,
      finalVideoUrl: project.finalVideoUrl,
      errorMessage: project.errorMessage,
      aiTasks: project.aiTasks,
    });
  } catch (error) {
    console.log("Get Video Status Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

/* ------------------------------------------------------------------ */
/* Delete a video project (ownership enforced)                         */
/* ------------------------------------------------------------------ */
export const deleteVideo = async (req, res) => {
  try {
    const project = await VideoProject.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ success: false, message: "Video project not found." });
    }
    if (project.user.toString() !== req.user.id) {
      return res.status(403).json({ success: false, message: "Not authorized." });
    }

    await project.deleteOne();

    res.status(200).json({ success: true, message: "Video project deleted." });
  } catch (error) {
    console.log("Delete Video Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
