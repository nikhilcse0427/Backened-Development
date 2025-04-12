import dotenv from 'dotenv'
import connectDB from './db/db.js'//use db.js
import {app} from './app.js'
dotenv.config({
  path: './.env'
})
const port = process.env.PORT || 4000
connectDB()
.then(()=>{
  app.listen(port, ()=>{
    console.log(`server is running on port number: ${port}`)
  })
})
.catch((error)=>{
  console.log("Mongodb connection failed: ", error)
})