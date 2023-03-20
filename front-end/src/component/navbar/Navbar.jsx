import React from 'react';	
import "./navbar.css"
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header>
      <nav className="flex gap-3 nav_container md:h-16">
        <Link to='/'><div className="flex flex-col md:flex-row justify-center items-center gap-2">
          <img src={logo} alt='project logo' className='w-10' />
          <h1 className="logo">EASY SHOP</h1>
        </div></Link>
        <ul className="flex flex-wrap justify-center sm:justify-start nav-ul">
          <Link to='/about'><li className="nav-link">About</li></Link>
          <Link to='/categories'><li className="nav-link category_btn">Categories</li></Link>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar