import React from 'react'
import './login.css'
import { useLocation, useNavigate, useNavigation, Form, useActionData } from 'react-router-dom'
import { loginUser } from '../../api/api'

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get('email')
    const password = formData.get('password')

    try {
        const data = await loginUser({email, password})
        localStorage.setItem('loggedIn', true)
        return data;
    } catch (err) {
        return {
            error: err.message
        }
    }
}

const Login = () => {
    const navigate = useNavigate()
    const navigation = useNavigation()
    const location = useLocation()
    const data = useActionData()

    const message = location.state?.message
    const from = location.state?.from || '/host'
    const {state: status} = navigation;

    React.useEffect(() => {
        if (data?.token) {
            navigate(from, { replace: true })
        }
    }, [data])

    return (
        <div className="login-container">
            <h2 className="login-error-msg">{message || data?.error}</h2>
            <h1 className="login-header-msg">Sign in to your account</h1>
            <Form 
                action="/login"
                method="post"
                className="login-form"
            >
                <input 
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                <input 
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button disabled={status === 'submitting'}>
                    {status === 'submitting' 
                        ? 'Logging in...' 
                        : 'Log in'
                    }
                </button>
            </Form>
        </div>
    )
}

export default Login