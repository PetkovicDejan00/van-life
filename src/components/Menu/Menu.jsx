import React, {useState} from 'react'
import './menu.css'
import {NavLink, Link} from 'react-router-dom'
import loginIcon from '../../assets/images/login-icon.png'

const Menu = () => {
    const [openMenu, setOpenMenu] = useState(false)

function toggleMenuPanel() {
    setOpenMenu(prevValue => !prevValue)
}

if (openMenu) {
    document.body.style.overflow = 'hidden';
} else {
    document.body.style.overflow = 'unset';
}

function fakeLogOut() {
    localStorage.removeItem("loggedIn")
    navigate('/login')
    setOpenMenu(prevValue => !prevValue)
}

return (
    <div className="menu">
        <div className={`menu-btn ${openMenu && 'change'}`} onClick={() => toggleMenuPanel()}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
        {openMenu &&
            <div className={`menu-panel ${openMenu && 'panel-active'}`}>
                {!localStorage.loggedIn &&
                <NavLink onClick={() => toggleMenuPanel()} to="/login">
                    <img src={loginIcon} alt="logo icon" />
                </NavLink>
                }
                <NavLink onClick={() => toggleMenuPanel()} to="/host">Host</NavLink>
                <NavLink onClick={() => toggleMenuPanel()} to="/about">About</NavLink>
                <NavLink onClick={() => toggleMenuPanel()} to="/vans">Vans</NavLink>
                {localStorage.loggedIn && 
                    <Link onClick={fakeLogOut}>Logout</Link>
                }
            </div>
        }
    </div>
)
}

export default Menu