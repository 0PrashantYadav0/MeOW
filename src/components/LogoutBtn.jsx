import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../appwrite/authServices'
import {logout} from '../store/authSlice'
import Button from './Button'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <Button
    onClick={logoutHandler}
    >Logout</Button>
  )
}

export default LogoutBtn