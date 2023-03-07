import {Outlet, Navigate, useLocation} from 'react-router-dom'
import React from 'react'

const AuthRequired = () => {
    const isLoggedIn = localStorage.getItem("loggedIn")
    const location = useLocation()
    
    if (!isLoggedIn) {
        return (
            <Navigate 
                to="/login" 
                state={{ 
                    message: "You must log in first.",
                    from: location.pathname,
                }}
                replace
            />
        )
    }
    return <Outlet />
}

export default AuthRequired