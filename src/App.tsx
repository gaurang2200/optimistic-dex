import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'

function App() {
  return (
    <div className="App">
        <Navbar />
        <Homepage />
    </div>
  )
}

export default App
