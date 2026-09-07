// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";

// import connectDB from "./config/db.js";
// import authRoutes from "./routes/authRoutes.js";
// import vendorRoutes from "./routes/vendorRoutes.js";
// import gameActivityRoutes from "./routes/gameActivityRoutes.js";
// import guestRoutes from "./routes/guestRoutes.js";
// import timelineRoutes from "./routes/timelineRoutes.js";
// import placesRoutes from "./routes/placesRoutes.js";
// import { seedDefaultGames } from "./utils/seedGames.js";

// dotenv.config();

// connectDB().then(() => seedDefaultGames());

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use("/uploads", express.static("uploads"));

// app.use("/api/auth", authRoutes);
// app.use("/api/vendors", vendorRoutes);
// app.use("/api/games", gameActivityRoutes);
// app.use("/api/guests", guestRoutes);
// app.use("/api/timeline", timelineRoutes);
// app.use("/api/places", placesRoutes);

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });



import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import vendorRoutes from "./routes/vendorRoutes.js";
import gameActivityRoutes from "./routes/gameActivityRoutes.js";
import guestRoutes from "./routes/guestRoutes.js";
import timelineRoutes from "./routes/timelineRoutes.js";
import placesRoutes from "./routes/placesRoutes.js";
import videoRoutes from "./routes/videoRoutes.js";
import { seedDefaultGames } from "./utils/seedGames.js";

dotenv.config();

connectDB().then(() => seedDefaultGames());

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use("/api/auth", authRoutes);
app.use("/api/vendors", vendorRoutes);
app.use("/api/games", gameActivityRoutes);
app.use("/api/guests", guestRoutes);
app.use("/api/timeline", timelineRoutes);
app.use("/api/places", placesRoutes);
app.use("/api/videos", videoRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});