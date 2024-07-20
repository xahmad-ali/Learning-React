import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='bg-cyan-300 w-full h-20 flex justify-center items-center'>
        <NavLink to='/' 
        className={({isActive})=> `font-bold p-3 hover:text-fuchsia-800 ${isActive ? 'text-fuchsia-800' :'text-stone-50'} `}> Home</NavLink>
        <NavLink to='/clour' 
        className={({isActive})=> `font-bold p-3 hover:text-fuchsia-800 ${isActive ? 'text-fuchsia-800' :'text-stone-50'} `}> Clours</NavLink>
        <NavLink to='/generatepassword' 
        className={({isActive})=> `font-bold p-3 hover:text-fuchsia-800 ${isActive ? 'text-fuchsia-800' :'text-stone-50'} `}> Generate Password</NavLink>
        <NavLink to='/currency' 
        className={({isActive})=> `font-bold p-3 hover:text-fuchsia-800 ${isActive ? 'text-fuchsia-800' :'text-stone-50'} `}> Currancey Changer</NavLink>
    </div>
  )
}

export default Header