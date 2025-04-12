import mongoose from 'mongoose'
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate'
const videoSchema = new mongoose.Schema({
  videoFile:{
    type:String,
    required:true
  },
  thumbnail:{
    type:String,
    required:true
  },
  title:{
    type:String,
    required:true,
  },
  description:{
    type:String,
    required:true
  },
  views:{
    type:Number,
    default:0
  },
  owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  isPublished:{
    type:Boolean,
    default:false
  },
  duration:{
    type:Number,//cloudinary give detail of video duration
    required:true
  }
})
videoSchema.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("Video", videoSchema)