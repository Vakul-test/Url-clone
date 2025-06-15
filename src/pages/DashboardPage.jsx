import React from 'react'
import UrlShortener from '../components/ShortUrl.jsx'
import UserUrl from '../components/UserUrl.jsx'

function DashboardPage() {
  return (
    <div className='relative bg-zinc-800 h-full w-screen'>
      <h1 className='absolute p-5 text-2xl text-white'>Dashboard</h1>
      <div className="flex items-center justify-center h-screen w-screen overflow-hidden">
        <div className=" w-full p-6 rounded-lg shadow-md">
            <UrlShortener/>
            <UserUrl/>
        </div>
    </div>
    </div>
  )
}

export default DashboardPage