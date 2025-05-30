import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config({
  path:"./.env"
});
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET // Note: Fixed typo (was using API_KEY again)
});


const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    // Upload the file to Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // File has been uploaded successfully
    console.log("File uploaded to Cloudinary:", response.url);
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    console.error("Upload failed:", error);
    fs.unlinkSync(localFilePath); // Remove the locally saved temporary file
    return null;
  }
};

export { uploadOnCloudinary};