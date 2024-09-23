import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
function App() {
  const [jokes, setJokes] = useState('')
  useEffect(()=>{
    axios.get('http://localhost:3000/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log(error)
    });
  })
  return (
    <>
      <h1>Fullstack</h1>
      <p>jokes_count: {jokes.length}</p>
      <p>joke: {jokes}</p>
      {/* {jokes.map((joke)=>{
        <div key={joke.id}>
        <h1>{joke.title}</h1>
        <p>{joke.content}</p> 
        </div>
      })

     } */}
    </>

  )
}

export default App
