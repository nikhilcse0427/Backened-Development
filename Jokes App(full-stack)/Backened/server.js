import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import cors from 'cors';

const port = process.env.PORT || 3000;

app.use(cors({
  origin: 'http://localhost:5173',
  methods:['GET', 'POST'],
  credentials: true,
}))

app.get('/api/jokes',(req,res)=>{
  res.json([
    {
      id: 1,
      title: "Programming Joke",
      content: "Why do programmers prefer dark mode? Because light attracts bugs!"
    },
    {
      id: 2,
      title: "Math Joke",
      content: "Why was the equal sign so humble? Because it knew it wasn't less than or greater than anyone else."
    },
    {
      id: 3,
      title: "Coffee Joke",
      content: "Why did the coffee file a police report? It got mugged!"
    },
    {
      id: 4,
      title: "Computer Joke",
      content: "Why did the computer go to the doctor? Because it had a virus!"
    },
    {
      id: 5,
      title: "Science Joke",
      content: "Why don't scientists trust atoms? Because they make up everything!"
      }
  ])
})

app.listen(port, ()=>{
  console.log(`app is listening at port number: ${port}`);
})