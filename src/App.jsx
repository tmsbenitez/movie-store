import React, { useEffect, useState } from 'react'
import { Header } from './Components/Header'
import { getAllMovies } from './database/client'
import Carousel from './Components/Carousel'
import { Routes, Route } from 'react-router-dom'

function App () {
  const [movies, setMovies] = useState([]) // Array with all movies

  useEffect(() => {
    // Gets all the movies from the database and adds them to the state
    getAllMovies()
      .then(res => setMovies(res.data))
      .catch(error => console.error(error))
  }, [])

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<><Header movies={movies} /> <Carousel movies={movies} /></>} />
      </Routes>
    </div>
  )
}

export default App
