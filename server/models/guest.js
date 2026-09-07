import mongoose from "mongoose";

const guestSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      default: "",
      trim: true,
    },

    phone: {
      type: String,
      default: "",
      trim: true,
    },

    side: {
      type: String,
      enum: ["Bride Side", "Groom Side", "Friends", "Family", "Other"],
      default: "Other",
    },

    groupSize: {
      type: Number,
      default: 1,
      min: 1,
    },

    rsvpStatus: {
      type: String,
      enum: ["Pending", "Confirmed", "Declined"],
      default: "Pending",
    },

    notes: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Guest", guestSchema);
