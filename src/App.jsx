import React from 'react'
import { Header } from './Components/Header'
import Login from './pages/Login'
import useGetMovies from './hooks/useGetMovies'
import Carousel from './Components/Carousel'
import './css/App.css'
import { Routes, Route } from 'react-router-dom'

function App () {
  const movies = useGetMovies()

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<><Header movies={movies} /> <Carousel movies={movies} /></>} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
