import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/**
 * Upload a single image buffer (from multer memory storage) to Cloudinary.
 * Returns the secure HTTPS URL.
 */
export const uploadImageBuffer = (buffer, folder = "wedai/video-planning") => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder, resource_type: "image" },
      (error, result) => {
        if (error) return reject(error);
        resolve(result.secure_url);
      }
    );
    stream.end(buffer);
  });
};

/**
 * Upload multiple image buffers in parallel.
 */
export const uploadMultipleImages = async (files, folder) => {
  const uploads = files.map((file) => uploadImageBuffer(file.buffer, folder));
  return Promise.all(uploads);
};

/**
 * Upload a local video file (produced by ffmpeg) to Cloudinary as a video resource.
 */
export const uploadVideoFile = (filePath, folder = "wedai/video-planning/final") => {
  return cloudinary.uploader.upload(filePath, {
    folder,
    resource_type: "video",
  });
};

export default cloudinary;
