import express from "express";
import {
  createGuest,
  getMyGuests,
  updateGuest,
  deleteGuest,
} from "../controllers/guestController.js";
import protect from "../middleware/authMiddleware.js";


const router = express.Router();

router.get("/", protect, getMyGuests);
router.post("/", protect, createGuest);
router.put("/:id", protect, updateGuest);
router.delete("/:id", protect, deleteGuest);

export default router;
