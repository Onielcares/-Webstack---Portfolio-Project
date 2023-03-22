import React from 'react';	
import "./navbar.css"
import logo from '../../assets/logo.png'
import { NavLink, Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header>
      <nav className="flex gap-3 nav_container md:h-16">
        <Link to='/'><div className="flex flex-col md:flex-row justify-center items-center gap-2">
          <img src={logo} alt='project logo' className='w-10' />
          <h1 className="logo">EASY SHOP</h1>
        </div></Link>
        <ul className="flex flex-wrap justify-center font-medium sm:justify-start nav-ul">
          <NavLink to='/'><li className="nav-link">Home</li></NavLink>
          <NavLink to='/about'><li className="nav-link">About</li></NavLink>
          <NavLink to='/categories'><li className="nav-link ">Categories</li></NavLink>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar