import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import './layout.css'

const Layout = () => {
  return (
    <>
        <div className="page-content">
          <Navbar />
          <Outlet />
        </div>
        <Footer />
    </>
  )
}

export default Layout