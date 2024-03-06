import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth.js'
import {logout} from '../../store/authSlice.js'

function LogOutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button className='inline-block px-6 py-2 duration-200 rounder-full'
    onClick={logoutHandler}
    >
        Log Out
    </button>
  )
}

export default LogOutBtn
