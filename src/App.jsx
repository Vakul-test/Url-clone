import React from 'react'
import { Outlet } from '@tanstack/react-router'
import NavBar from './components/NavBar'


function App() {
  return (
    <div className="overflow-hidden">
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default App