import React from 'react'
import { Link } from '@tanstack/react-router'

function NavBar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800 uppercase">
              URL Shortener
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-600 hover:text-gray-900 uppercase">
              home
            </Link>
            <Link to="/dashboard" className="text-gray-600 hover:text-gray-900 uppercase">
              Dashboard
            </Link>
          <Link to="/logout" className="text-red-500 hover:text-red-600 uppercase">
            Logout
          </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar