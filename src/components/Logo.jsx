import React from 'react'
import logo from "../../GSlogo.webp"
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <div className='w-16'>
      <Link to="/">
        <img src={logo} alt="logo" className='rounded-full' />
      </Link>
    </div>
  )
}

export default Logo
