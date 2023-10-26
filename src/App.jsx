import { useState } from 'react'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'
import './App.css'
import {Route,Routes} from 'react-router-dom'

function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
      
    </>
  )
}

export default App
