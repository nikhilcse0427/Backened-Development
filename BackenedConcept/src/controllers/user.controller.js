import { ApiError } from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const generateAccessAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return { accessToken, refreshToken }
    } catch (error) {
        throw new ApiError(401, "something went wrong while generating accessToken or refreshToken")
    }
}


const registerUser = asyncHandler(async (req, res) => {
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
    const { fullname, username, email, password } = req.body
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
    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    })
    if (existedUser) {
        throw new ApiError(400, "username or email already exist")
    }

    //4.
    const avatarLocalPath = req.files?.avatar[0]?.path
    const coverImageLocalPath = req.files?.coverImage[0]?.path

    if (!avatarLocalPath) {
        throw new ApiError(400, "avatar field is required")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    //5.
    if (!avatar) {
        throw new ApiError(400, "Avatar file is required")
    }

    const user = await User.create({
        fullName: fullname,
        email,
        username,
        password,
        avatar: avatar.url,
        coverImage: coverImage ? coverImage.url : ""
    })

    const createdUser = await User.findById(user._id).select("-password -refreshToken")
    if (!createdUser) {
        throw new ApiError(400, "something went wrong while registering user")
    }
    res.status(201).json(
        new ApiResponse(200, createdUser, "registeration done successfully")
    )


})

const loginUser = asyncHandler(async (req, res) => {
    //get data from req.body
    //username or email
    //find user
    //password check
    //refresh token and access token
    //sent cookie
    const { username, email, password } = req.body
    if (!username && !email) {
        throw new ApiError(401, "username or email required")
    }

    const user = User.findOne({
        $or: [{ username }, { email }]
    })

    if (!user) {
        throw new ApiError(401, "user does not exist")
    }

    const isValidPassword = await user.isPasswordCorrect(password)

    if (!isValidPassword) {
        throw new ApiError(401, "password does not match")
    }

    const { accessToken, refreshToken } = await user.generateAccessAndRefreshToken(user._id)
    const loggedInUser = User.findById(user._id).select("-password -refreshToken")

    return res
        .status(200)
        .cookie("access token: ", accessToken)
        .cookie("refreshToken: ", refreshToken)
        .json(
            200,
            {
                user: loggedInUser, accessToken, refreshToken
            },
            "User loggedin successfully"
        )
})

const logoutUser = asyncHandler(async (req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                refreshToken: undefined
            }
        },
        {
            new: true
        }
    );
    const options = {
        httpOnly: true,
        secure: true
    }
    return res.status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(new ApiResponse(200, {}, "User logged out successfully"));
});

export default { registerUser, loginUser, logoutUser }
