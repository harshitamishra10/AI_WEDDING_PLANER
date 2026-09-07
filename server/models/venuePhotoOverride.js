import mongoose from "mongoose";

const venuePhotoOverrideSchema = new mongoose.Schema(
  {
    placeId: {
      type: String,
      required: true,
      unique: true,
    },
    venueName: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("VenuePhotoOverride", venuePhotoOverrideSchema);
