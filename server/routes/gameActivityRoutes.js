import express from "express";
import {
  getGames,
  toggleSelectGame,
  createCustomGame,
  getMySelections,
} from "../controllers/gameActivityController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Browse/filter the games catalog (public)
router.get("/", getGames);

// Logged-in user's selected games (must come before "/:id" routes)
router.get("/mine", protect, getMySelections);

// Add a custom game/activity suggestion
router.post("/", protect, createCustomGame);

// Toggle select/unselect a game for the logged-in user's wedding
router.post("/:id/select", protect, toggleSelectGame);

export default router;
