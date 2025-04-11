import mongoose from 'mongoose'
const productSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  productImage:{
    type:String,
    required:true
  },
  price:{
    type:number,
    required:true
  },
  stock:{
    type:number,
    default:0
  },
  category:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Category"
  },
  owner:{
    type:String,
    required:true
  }

},{timestamps:true})
export const Product = mongoose.model("Product", productSchema)