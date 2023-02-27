import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import navLogo from '../../assets/images/logo.png'
import './navbar.css'

const Navbar = () => {
  return (
      <header>
        <Link className="site-logo" to="/">
          <img src={navLogo} />
        </Link>
        <nav>
            <NavLink to="/host">Host</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/vans">Vans</NavLink>
        </nav>
      </header>
  )
}

export default Navbar