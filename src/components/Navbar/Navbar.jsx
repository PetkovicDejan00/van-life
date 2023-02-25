import React from 'react'
import {Link} from 'react-router-dom'
import navLogo from '../../assets/images/logo.png'
import './navbar.css'

const Navbar = () => {
  return (
    <header>
        <Link className="site-logo" to="/">
          <img src={navLogo} />
        </Link>
        <nav>
            <Link to="/about">About</Link>
            <Link to="/vans">Vans</Link>
        </nav>
    </header>
  )
}

export default Navbar