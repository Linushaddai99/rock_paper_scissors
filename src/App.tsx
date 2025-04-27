import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'

function App() {
  const style = {
    // background: '#141539',
    background: 'linear-gradient(0deg,rgba(20, 21, 57, 1) 0%, rgba(31, 55, 86, 1) 100%)'
  }
  return (
    <div style={style} className='flex justify-center items-center bg-[#141539]'>
      <Home />
    </div>
  )
}

export default App
