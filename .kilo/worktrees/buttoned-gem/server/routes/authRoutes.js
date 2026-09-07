// import express from "express";
// import { registerUser } from "../controllers/authController.js";

// const router = express.Router();

// router.post("/register", registerUser);

// export default router;

import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);
router.get("/profile", protect, (req, res) => {
  res.json({
    message: "Welcome",
    user: req.user,
  });
});

export default router;