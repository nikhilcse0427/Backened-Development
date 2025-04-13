import asyncHandler from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async(req,res)=>{
  return res.status(200).json({ //the status code 200 is an HTTP response status code it indicates that the request has succeeded.
    message: "user registeration done successfully ",
  })
})

export default registerUser