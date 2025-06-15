import React from 'react'
import ShortUrl from "../components/ShortUrl.jsx"

function Home() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ShortUrl/>
      </div>
    </div>
  )
}

export default Home