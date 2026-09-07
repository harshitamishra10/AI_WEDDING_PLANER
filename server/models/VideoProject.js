import mongoose from "mongoose";

const videoProjectSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      default: "My Wedding Film",
    },

    images: {
      type: [String], // Cloudinary URLs
      default: [],
    },

    videoStyle: {
      type: String,
      enum: [
        "Cinematic Romance",
        "Traditional Wedding",
        "Emotional Memories",
        "Bollywood Style",
        "Royal Wedding",
        "Soft & Dreamy",
      ],
      required: true,
    },

    coupleNames: {
      type: String,
      required: true,
    },

    weddingDate: {
      type: Date,
    },

    customMessage: {
      type: String,
      default: "",
    },

    generationStatus: {
      type: String,
      enum: ["draft", "uploading", "processing", "generating", "completed", "failed"],
      default: "draft",
    },

    statusMessage: {
      type: String,
      default: "",
    },

    aiProvider: {
      type: String,
      enum: ["runway", "kling"],
      default: "runway",
    },

    // One AI task per source image (each image becomes a short clip)
    aiTasks: [
      {
        imageUrl: String,
        taskId: String,
        status: {
          type: String,
          enum: ["pending", "processing", "completed", "failed"],
          default: "pending",
        },
        clipUrl: String,
      },
    ],

    generatedClips: {
      type: [String],
      default: [],
    },

    finalVideoUrl: {
      type: String,
      default: "",
    },

    errorMessage: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export default mongoose.model("VideoProject", videoProjectSchema);
