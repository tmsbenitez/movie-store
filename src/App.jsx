import React from 'react'
import Login from './pages/Login'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App () {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
