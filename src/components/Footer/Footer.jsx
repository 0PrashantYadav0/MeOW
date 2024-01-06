import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {

  return (
    <>
      <div className='bg-[#031B34] text-white px-12 py-16'>
        <div className='pt-8 pb-12 text-center'>
          <p className='bg-text text-6xl font-bold'>
          Do you want to connect with others and share thought ?
          </p>
        </div>
        <div className='flex justify-center items-center pt-20 pb-20'>
          <button className='border-2 p-6'>
            <Link to='/contact'>
              Connect with us 
            </Link>
          </button>
        </div>
        <div>
        </div>
        <div className='flex flex-wrap justify-evenly align-middle'>
          <div className='m-12'>
            <p className='text-3xl font-medium hover:underline'>Github</p>
            <p className='pt-2 text-gray-300 hover:underline text-sm'>Githuburl</p>
            <p className='pt-2 text-gray-300 hover:underline text-sm'>Account</p>
            <p className='pt-2 text-gray-300 hover:underline text-sm'>Counters</p>
            <p className='pt-2 text-gray-300 hover:underline text-sm'>contact</p>
          </div>
          <div className='m-12'>
            <p className='text-3xl font-medium hover:underline'>Company</p>
            <p className='pt-2 text-gray-300 hover:underline text-sm'>  Terms &amp; Conditions</p>
            <p className='pt-2 text-gray-300 hover:underline text-sm'>Privacy Policy</p>
            <p className='pt-2 text-gray-300 hover:underline text-sm'>Contact</p>
          </div>
          <div className='m-12'>
            <p className='text-3xl font-medium hover:underline'>Get in touch</p>
            <p className='pt-2 text-gray-300 hover:underline text-sm'>Location</p>
            <p className='pt-2 text-gray-300 hover:underline text-sm'>Social Media</p>
            <p className='pt-2 text-gray-300 hover:underline text-sm'>Email</p>
            <p className='pt-2 text-gray-300 hover:underline text-sm'>Address</p>
          </div>
          <div className='m-12'>
            <p className='text-3xl font-medium hover:underline'>Account</p>
            <p className='pt-2 text-gray-300 hover:underline text-sm'>Main</p>
            <p className='pt-2 text-gray-300 hover:underline text-sm'>Side Bussiness</p>
            <p className='pt-2 text-gray-300 hover:underline text-sm'>Components</p>
            <p className='pt-2 text-gray-300 hover:underline text-sm'>Others</p>
          </div>
          <div className='m-12'>
            <p className='text-3xl font-medium hover:underline'>Help</p>
            <p className='pt-2 text-gray-300 hover:underline text-sm'>Customer Support</p>
            <p className='pt-2 text-gray-300 hover:underline text-sm'>Help contact</p>
            <p className='pt-2 text-gray-300 hover:underline text-sm'>Work Place</p>
          </div>        
        </div>
        <div className="text-center text-xs text-gray-300 leading-3">
            <p>@2023 GPT-3. All rights reserved.</p>
        </div>
      </div>
    </>

  )
}

export default Footer
