import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RagisterForm'

const AuthPage = () => {

    const [Login, setLogin] = useState(true)
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-900 overflow-hidden">
        <div className="w-full p-6 rounded-lg shadow-md h-full flex items-center ">
            {Login ? <LoginForm state={setLogin} /> : <RegisterForm state={setLogin} />}
      
        </div>  
    </div>
  )
}

export default AuthPage