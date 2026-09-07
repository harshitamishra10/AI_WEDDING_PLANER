import express from "express";
import {
  uploadVideoImages,
  generateVideo,
  getMyVideos,
  getVideoById,
  getVideoStatus,
  deleteVideo,
} from "../controllers/videoController.js";
import protect from "../middleware/authMiddleware.js";
import memoryUpload from "../middleware/memoryUpload.js";

const router = express.Router();

router.post("/upload", protect, memoryUpload.array("images", 20), uploadVideoImages);
router.post("/generate", protect, generateVideo);
router.get("/", protect, getMyVideos);
router.get("/:id", protect, getVideoById);
router.get("/:id/status", protect, getVideoStatus);
router.delete("/:id", protect, deleteVideo);

export default router;
