import mongoose from "mongoose";

const gameActivitySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      enum: [
        "Haldi",
        "Mehendi",
        "Sangeet",
        "Engagement",
        "Wedding Ceremony",
        "Reception",
        "Cocktail",
        "General",
      ],
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    groupSize: {
      min: { type: Number, default: 2 },
      max: { type: Number, default: 50 },
    },

    durationMinutes: {
      type: Number,
      default: 15,
    },

    propsNeeded: {
      type: [String],
      default: [],
    },

    energyLevel: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },

    image: {
      type: String,
      default: "",
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    isCustom: {
      type: Boolean,
      default: false,
    },

    // Users who have selected this game/activity for their own wedding
    selectedBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("GameActivity", gameActivitySchema);
