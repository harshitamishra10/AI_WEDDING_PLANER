// // // const express = require("express");
// // // const cors = require("cors");
// // // const dotenv = require("dotenv");
// // // const cookieParser = require("cookie-parser");

// // // dotenv.config();

// // // const app = express();

// // // app.use(cors({
// // //     origin: "http://localhost:5173",
// // //     credentials: true
// // // }));

// // // app.use(express.json());
// // // app.use(cookieParser());

// // // app.get("/", (req, res) => {
// // //     res.send("WedAI Backend Running 🚀");
// // // });

// // // const PORT = process.env.PORT || 5000;

// // // app.listen(PORT, () => {
// // //     console.log(`Server running on ${PORT}`);
// // // });
// // const express = require("express");
// // const dotenv = require("dotenv");
// // const cors = require("cors");
// // const cookieParser = require("cookie-parser");

// // const connectDB = require("./config/db");

// // dotenv.config();

// // connectDB();

// // const app = express();

// // app.use(cors({
// //   origin: "http://localhost:5173",
// //   credentials: true,
// // }));

// // app.use(express.json());
// // app.use(cookieParser());

// // app.get("/", (req, res) => {
// //   res.send("🚀 WedAI Backend Running...");
// // });

// // const PORT = process.env.PORT || 5000;

// // app.listen(PORT, () => {
// //   console.log(`Server running on ${PORT}`);
// // });
// import express from "express";
// import dotenv from "dotenv";
// import connectDB from "./config/db.js";

// dotenv.config();

// connectDB();

// const app = express();

// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("API Running...");
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});