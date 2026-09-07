import express from "express";
import {
  createVendor,
  getVendors,
  getVendorById,
  getMyVendors,
} from "../controllers/vendorController.js";
import protect from "../middleware/authMiddleware.js";
import upload from "../middleware/upload.js";

const router = express.Router();

// Public search — anyone can browse venues by location/budget/guests
router.get("/", getVendors);

// Logged-in user's own listings (must come before "/:id" to avoid route clash)
router.get("/mine", protect, getMyVendors);

// Single venue detail
router.get("/:id", getVendorById);

// Vendor onboarding — logged-in users can list a venue, up to 6 images
router.post("/", protect, upload.array("images", 6), createVendor);

export default router;

