import { ApiError } from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
const registerUser = asyncHandler(async(req,res)=>{
  //get data from frontened
  //add validation -> not empty
  //check if user already exist -> username,email
  //check images ->avatar is compulsory in userSchema
  //upload avtar at cloudinary
  //create user objecct->create entry in db
  //remove password and refresh token from response
  //check for successfull user creation
  //send res

  //1.
  const {fullname, username, email, password} = req.body
  console.log("fullname: ", fullname)
  console.log("password: ", password)
  
  //2.
  //some function returns boolean
  const emptyFields = [fullname, username, email, password].some(
    (field) => !field || field.trim() === ""
  )
  if (emptyFields) {
    throw new ApiError(400, "All fields are required");
  }

//3.
  const existedUser = User.findOne({
  $or:[{username},{email}]
})
  if(existedUser){
    throw new ApiError(400, "username or email already exist")
  }

  //4.
  const avatarLocalPath = req.files?.avatar[0]?.path
  const coverImageLocalPath = req.files?.coverImage[0]?.path

  if(!avatarLocalPath){
    throw new ApiError(400, "avatar field is required")
  }

  const avatar = await uploadOnCloudinary(avatarLocalPath)
  const coverImage = await uploadOnCloudinary(coverImageLocalPath)

  //5.
  if(!avatar){
    throw new ApiError(400, "Avatar file is required")
  }

  const user = User.create({
    fullname,
    email,
    username,
    password,
    avatar: avatar.url,
    coverImage: coverImage?coverImage.url: ""
  })

  const createdUser = await User.findById(user._id).select("-password --refreshToken")
  if(!createdUser){
    throw new ApiError(400, "something went wrong while registering user")
  }
  res.status(201).json(
    new ApiResponse(200, createdUser, "registeration done successfully")
  )
  

})

export default registerUser