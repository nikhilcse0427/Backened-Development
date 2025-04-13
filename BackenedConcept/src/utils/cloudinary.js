import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_SECRET,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto"
    })
    //file is successfully uploaded
    console.log("file is successfully uploaded", response.url)
    return response.url
  } catch (error) {
    // If file upload fails, remove the locally saved temporary file
    fs.unlinkSync(localFilePath)
    // Return null if upload fails
    return null
  }
}

export { uploadOnCloudinary }


// When user uploads a file:
// 1. File comes from user's computer
// 2. Saved temporarily in ./temp/ folder
// 3. Uploaded to Cloudinary
// 4. Deleted from ./temp/ folder


// Reasons for temporary storage:
// 1. Need a place to hold the file before Cloudinary upload
// 2. Can validate the file before uploading
// 3. Can process the file if needed
// 4. Can handle upload errors properly