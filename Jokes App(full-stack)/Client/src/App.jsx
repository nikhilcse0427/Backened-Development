import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:4000/api/jokes')
      .then((response) => {
        setJokes(response.data);
      }).catch((error) => {
        console.log("Error message: ", error);
      })
  }, [])
  return (
    <>
      <div className='border-5 border-blue-500 rounded-sm border-solid h-[calc(100vh-42px)] w-[calc(100vw-20px)] m-2 flex items-center flex-col'>
        <p className='text-5xl p-5 text-red-700 font-bold'>Welcome to JokesHub😜</p>
        <div className='w-full'>
          {
            jokes.map((joke, index) => (
              <div key={joke.id} className="text-2xl m-15 h-10 w-[calc(100vw-50px) m-10]">
                <p className='text-3xl font-bold text-blue-700'>{joke.title}</p>
                <p className='text-2xl'>{joke.content}</p>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App