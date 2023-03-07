import React from 'react'
import {NavLink, Link, useNavigate} from 'react-router-dom'
import navLogo from '../../assets/images/logo.png'
import loginIcon from '../../assets/images/login-icon.png'
import Menu from '../Menu/Menu'
import './navbar.css'

const Navbar = () => {
  const navigate = useNavigate()

  function fakeLogOut() {
    localStorage.removeItem("loggedIn")
    navigate('/login')
  }

  return (
      <header className="container">
        <Link className="site-logo" to="/">
          <img src={navLogo} />
        </Link>
        <nav>
            <NavLink to="/host">Host</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/vans">Vans</NavLink>
            {!localStorage.loggedIn &&
            <NavLink to="/login">
              <img src={loginIcon} alt="logo icon" />
            </NavLink>
            }
            {localStorage.loggedIn && 
              <Link onClick={fakeLogOut}>Logout</Link>
            }
        </nav>
        <Menu />
      </header>
  )
}

export default Navbar