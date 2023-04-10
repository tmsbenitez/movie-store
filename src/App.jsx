import React, { useEffect, useState } from 'react'
import { Header } from './Components/Header'
import { getAllMovies } from './database/client'

function App () {
  const [movies, setMovies] = useState([]) // Array with all movies

  useEffect(() => {
    // Gets all the movies from the database and adds them to the state
    getAllMovies()
      .then(res => setMovies(res.data))
      .catch(error => console.error(error))
  }, [])

  console.log(movies) // Remove this line when using the movies in any component

  return (
    <div className='App'>
      <Header />
    </div>
  )
}

export default App
