import React from 'react'
import {Link} from 'react-router-dom'
import './errorPage.css'

const ErrorPage = () => {
  return (
    <div className="error">
        <h1>Sorry, the page you were looking for was not found.</h1>
        <Link to=".">Return to home</Link>
    </div>
  )
}

export default ErrorPage