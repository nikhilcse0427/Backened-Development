import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const userSchema = mongoose.Schema({
  username:{
    type:String,
    unique:true,
    lowercase:true,
    trim:true,
    required:true,
    index:true
  },
  email:{
    type:String,
    unique:true,
    lowercase:true,
    required:true,
    trim:true
  },
  fullName:{
    type:String,
    trim:true,
    required:true,
    index:true
  },
  password:{
    type:String,
    required:[true, "password is required"]
  },
  avatar:{
    type:String,  //cloudinary url
    required:true
  },
  coverImage:{
    type:String  //cloudinary url
  },
  refreshToken:{
    type:String
  },
  watchHistory:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Video"
  }

},{timestamps:true})

userSchema.pre("save", async function(next){  // dont use arrow function in pre plugin
  if(!mongoose.isModified("password")) return next()
  this.password = bcrypt.hash(this.password, 10) //10 is round of hashing
  next()
})

userSchema.methods.isPasswordCorrect = async function(password){
  return await bcrypt.compare(password, this.password)
}

userSchema.methodsgenerateAccessToken = function(){
  return jwt.sign(
    {
      _id:this._id,
      username:this.username,
      fullname:this.fullname,
      email:this.email,
    },{
      secret: process.env.ACCESS_TOKEN_SECRET
    },{
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  )
}

userSchema.methods.generateRefreshToken = function(){
  return jwt.sign(
    {
      _id:this._id,
    },{
      secret: process.env.REFRESH_TOKEN_SECRET
    },{
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  )
}
export const User = mongoose.model("User", userSchema)