import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from "./appwrite/authServices"
import {login, logout} from "./store/authSlice"
import Footer  from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return  (
    <div className='bg-custom'>
      <div >
        <Navbar />
        <main>
        <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App;