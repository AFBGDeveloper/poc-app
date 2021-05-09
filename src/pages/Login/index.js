import './login.css'
import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { TextField, Button } from '@material-ui/core'

const Login = () => {
    const history = useHistory()
    const location = useLocation()
    const auth = useAuth()
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')

    function handleChange(event) {
        if (event.target.id === 'e-mail') {
            setEmail(event.target.value)
        } else {
            setPassword(event.target.value)
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log("into")
        if (email === "") {
            setEmailError('Write your email')
            return
        }
        if (password === "") {
            setPasswordError('Write your password')
            return
        }

        let { from } = location.state || { from: { pathname: '/login' } }
        const response = auth.signIn(email, password)
        if (response) {
            history.replace(from)
        }
    }

    return (
        <div className="container">
            <form className="login-form">
                <h2>Login</h2>
                <p>Login and get access to all pokemons</p>

                <div className="input-container">
                    <TextField
                        id="e-mail"
                        label="E-mail"
                        onChange={ handleChange }
                        value={ email }
                        style={ { marginBottom: 20 } }
                        variant="filled"
                        helperText={ (emailError !== '') ? emailError : '' }
                        error={ (emailError !== '') ? true : false }
                        fullWidth
                    />
                </div>

                <div className="input-container">
                    <TextField
                        id="password"
                        label="Password"
                        type="password"
                        onChange={ handleChange }
                        value={ password }
                        style={ { marginBottom: 20 } }
                        variant="filled"
                        helperText={ (passwordError !== '') ? passwordError : '' }
                        error={ (passwordError !== '') ? true : false }
                        fullWidth
                    />
                </div>

                <div className="login-actions-container">
                    {/* <Button
                        variant="outlined"
                        color="default"
                        onClick={ handleSubmit }
                    >
                        Signin
                    </Button> */}
                    <Button
                        variant="contained"
                        color="default"
                        onClick={ handleSubmit }
                    >
                        Login
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default Login