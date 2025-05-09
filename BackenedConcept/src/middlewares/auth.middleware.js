import { User } from "../models/user.model";
import { ApiError } from "../utils/apiError";
import asyncHandler from "../utils/asyncHandler";
import jwt from "jsonwebtoken"
export const verifyJWT = asyncHandler(async(req,res,next)=>{
  try {
    const token = req.cookies?.accessToken  || req.header("Authorization")?.replace("Bearer", "")
  
    if(!token){
      throw new ApiError(401, "Unauthorized token")
    }
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
  
    if(!user){
      // Todo discuss about frontened
      throw new ApiError(401, "Invalid Access Token")
    }
  
    req.user=user
    next()
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid access token")
  }
})