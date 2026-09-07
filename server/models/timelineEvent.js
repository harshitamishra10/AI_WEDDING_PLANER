import mongoose from "mongoose";

const timelineEventSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    eventType: {
      type: String,
      enum: [
        "Engagement",
        "Haldi",
        "Mehendi",
        "Sangeet",
        "Wedding Ceremony",
        "Reception",
        "Custom",
      ],
      default: "Custom",
    },

    date: {
      type: Date,
      required: true,
    },

    time: {
      type: String,
      default: "10:00 AM",
    },

    location: {
      type: String,
      default: "",
    },

    notes: {
      type: String,
      default: "",
    },

    isGenerated: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("TimelineEvent", timelineEventSchema);
