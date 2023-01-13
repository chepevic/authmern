import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div className='nav'>
      
      <div className="nav__menu">
  
        <NavLink to="/" className={({isActive})=>isActive?'nav__link color-red':'nav__link'}>Home</NavLink>
        <NavLink to="/register" className={({isActive})=>isActive?'nav__link color-red':'nav__link'}>Register</NavLink>
        <NavLink to="/login" className={({isActive})=>isActive?'nav__link color-red':'nav__link'}>Login</NavLink>
      </div>
    </div>

  )
}
