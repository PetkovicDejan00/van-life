import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'
import './hostLayout.css'

const HostLayout = () => {
  return (
    <>
        <div className="host-layout">
            <NavLink to="." end>Dashboard</NavLink>
            <NavLink to="income">Income</NavLink>
            <NavLink to="vans">Vans</NavLink>
            <NavLink to="reviews">Reviews</NavLink>
        </div>
        <Outlet />
    </>
  )
}

export default HostLayout