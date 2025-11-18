import React from 'react'
import './ErrorWindow.css'
import error_img from '../../assets/error_dog.png'
import { Link } from 'react-router-dom'

const ErrorWindow = () => {
  return (
    <div className=' relative errorwindow text-amber-50'>
        <h1 className=' text-red-700 absolute top-10 font-bold  left-16 text-8xl'>SORRY</h1>
        <p className='absolute top-32 left-17 font-light  text-3xl'>We couldn't find that page</p>
        <p className='absolute top-39.5 font-extralight text-xl left-62'>Navigate to <Link to="/"className='text-blue-300'>Home</Link></p>
        <img src={error_img} className='size-auto' alt="error_404" />
    </div>
  )
}

export default ErrorWindow