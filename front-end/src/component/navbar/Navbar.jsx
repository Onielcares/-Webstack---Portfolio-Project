import React from 'react';	
import "./navbar.css"
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header>
      <nav className="flex nav_container h-16">
        <Link to='/'><div className="flex items-center gap-2">
          <img src={logo} alt='project logo' className='w-10' />
          <h1 className="logo">EASY SHOP</h1>
        </div></Link>
        <ul className="flex nav-ul">
          <Link to='/about'><li className="nav-link">About</li></Link>
          <Link to='/categories'><li className="nav-link category_btn">Categories</li></Link>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar