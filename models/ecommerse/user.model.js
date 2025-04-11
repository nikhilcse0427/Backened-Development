import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  username:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    minlength:[8, "Username must contsin atleast 8 characters"]
  },
  email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true
  },
  password:{
    type:String,
    required:true,
    minlength:[8, "password must contain atleast 8 digit"]
  }},{timestamps:true}
)
export const User = mongoose.model("User", userSchema);