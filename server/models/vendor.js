import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema(
  {
    ownerUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    businessName: {
      type: String,
      required: true,
      trim: true,
    },

    type: {
      type: String,
      enum: [
        "Venue",
        "Hotel",
        "Banquet Hall",
        "Resort",
        "Palace",
        "Beach Resort",
        "Garden",
        "Other",
      ],
      required: true,
    },

    description: {
      type: String,
      default: "",
    },

    location: {
      city: { type: String, required: true, trim: true },
      state: { type: String, default: "" },
      country: { type: String, default: "India" },
      address: { type: String, default: "" },
    },

    pricePerDay: {
      type: Number,
      required: true,
      min: 0,
    },

    guestCapacity: {
      min: { type: Number, required: true, min: 0 },
      max: { type: Number, required: true, min: 0 },
    },

    amenities: {
      type: [String],
      default: [],
    },

    images: {
      type: [String],
      default: [],
    },

    rating: {
      type: Number,
      default: 4.5,
      min: 0,
      max: 5,
    },

    reviewsCount: {
      type: Number,
      default: 0,
    },

    contactEmail: {
      type: String,
      default: "",
    },

    contactPhone: {
      type: String,
      default: "",
    },

    isApproved: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Vendor", vendorSchema);
