import React, { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

function CreateShortUrl() {
  const [url, setUrl] = useState('')
  const [shortUrl, setShortUrl] = useState('')

  const createShortUrl = useMutation({
    mutationFn: async (longUrl) => {
      const response = await axios.post('http://localhost:3000/user/create', {
        longUrl
      }, {
        withCredentials: true
      })
      return response.data
    },
    onSuccess: (data) => {
      setShortUrl(data.shortUrl)
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    createShortUrl.mutate(url)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="url" className="block text-sm font-medium text-gray-700">
              Enter your URL
            </label>
            <div className="mt-1">
              <input
                type="url"
                name="url"
                id="url"
                required
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="https://example.com"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={createShortUrl.isPending}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {createShortUrl.isPending ? 'Creating...' : 'Create Short URL'}
          </button>
        </form>

        {shortUrl && (
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-900">Your Short URL:</h3>
            <div className="mt-2 p-4 bg-white rounded-md shadow">
              <a
                href={shortUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-500"
              >
                {shortUrl}
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CreateShortUrl 