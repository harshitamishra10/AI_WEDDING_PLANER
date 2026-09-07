import express from "express";
import {
  generateTimeline,
  getMyTimeline,
  createEvent,
  updateEvent,
  deleteEvent,
} from "../controllers/timelineController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getMyTimeline);
router.post("/generate", protect, generateTimeline);
router.post("/", protect, createEvent);
router.put("/:id", protect, updateEvent);
router.delete("/:id", protect, deleteEvent);

export default router;
