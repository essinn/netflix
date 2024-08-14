import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const SignUp = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const { user, signUp } = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await signUp(email, password)
        navigate('/')
    } catch (error) {
        console.log(error)
    }
  }
  
  return (
    <div className='w-full h-screen'>
        <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
            alt="netlfix background"
            className='hidden sm:block absolute w-full h-full object-cover'
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[500px] mx-auto bg-black/75 text-white'>
                <div className='max-w-[320px] mx-auto py-16'>
                    <h1 className='text-3xl font-bold'>Sign Up</h1>
                    <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder='Email'
                            className='p-3 my-2 bg-gray-700 rounded'
                        />
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder='Password'
                            className='p-3 my-2 bg-gray-700 rounded'    
                        />
                        <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
                        <div className='flex items-center justify-between text-sm text-gray-600'>
                            <p>
                                <input type="checkbox" className='mr-2' />
                                Remember me
                            </p>
                            <p>Need Help?</p>
                        </div>
                        <p className='py-6'>
                            <span className='mr-2 text-gray-600'>Already subscribed to Netflix?</span>
                            <Link to='/sign-in'>
                                Sign In
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp