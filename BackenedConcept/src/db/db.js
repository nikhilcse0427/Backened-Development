import mongoose from 'mongoose'
import { Database_Name } from '../constants.js'//use constants.js

const connectDB = async ()=>{
  try{
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${Database_Name}`)
    console.log("MONGODB CONNECTED !!")
  }catch(error){
    console.log("mongodb connection error: ", error)
    process.exit(1)
    //process.exit(1) will stop the ENTIRE Node.js application, not just a part of it.
  }
}

export default connectDB