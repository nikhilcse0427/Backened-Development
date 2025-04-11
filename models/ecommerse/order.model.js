import mongoose from 'mongoose'
const orderItemsSchema = new mongoose.Schema({
  productId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Product"
  },
  quantity:{
    type:Number,
    required:true
  }

})
const orderSchema = new mongoose.Schema({
  orderPrice:{
    type:String,
    required:true
  },
  customer:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  address:{
    type:String,
    required:true
  },
  status:{
    type:String,
    enum:["Pending", "Cancelled","Delivered"],
    default:"Pending"
  }
  orderItems:[orderItemsSchema]
},{timestamps:true})
export const Order = mongoose.model("Order", orderSchema)