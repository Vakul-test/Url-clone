import React, { useEffect } from 'react'
import { logoutUser } from '../api/user.api'
import { useDispatch } from 'react-redux'
import { logout } from '../store/slice/authSlice'
import { useNavigate } from '@tanstack/react-router'

const Logout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await logoutUser()
        dispatch(logout())
        navigate({ to: '/' })
      } catch (error) {
        console.error('Logout failed:', error)
        // Even if the API call fails, we should still clear local state
        dispatch(logout())
        navigate({ to: '/' })
      }
    }

    handleLogout()
  }, [dispatch, navigate])

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  )
}

export default Logout