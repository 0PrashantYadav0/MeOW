import React from 'react'
import github from "../assets/github.png"
import google from "../assets/google.png";
import appwrite from "../assets/appwrite.png"
import logo from "../assets/logo.png"

function Links() {
  return (
    <div className='flex justify-around items-center py-20 '>
      <a href="https://github.com/0PrashantYadav0/">
        <img src={github} alt="github" className='w-40 max-md:w-20' />
      </a>
      <a href="https://google.com">
        <img src={google} alt="google" className='w-48 max-md:w-20'/>
      </a>
      <a href="https://appwrite.com">
        <img src={appwrite} alt="appwrite" className='w-48 bg-transparent max-md:w-20'/>
      </a>
      <a href="https://openai.com">
        <img src={logo} alt="logo" className='w-40 max-md:w-20'/>
      </a>
    </div>
  )
}

export default Links
