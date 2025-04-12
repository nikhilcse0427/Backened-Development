import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

//Middlewares
app.use(cors({
  path:process.env.CORS,
  methods:["GET","POST"],
  credentials:true
}))

app.use(express.json({limit:"18kb"}))
app.use(express.urlencoded({limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

export {app}