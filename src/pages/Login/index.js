import './login.css'
import React, { useState } from 'react'

import { TextField, Button } from '@material-ui/core'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleChange(event) {
        if (event.target.id === 'e-mail') {
            setEmail(event.target.value)
        } else {
            setPassword(event.target.value)
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log('On handle submit');
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
                        fullWidth
                    />
                </div>

                <div className="input-container">
                    <TextField
                        id="password"
                        label="Password"
                        onChange={ handleChange }
                        value={ password }
                        style={ { marginBottom: 20 } }
                        variant="filled"
                        fullWidth
                    />
                </div>

                <div className="login-actions-container">
                    <Button
                        variant="outlined"
                        color="default"
                        onClick={ handleSubmit }
                    >
                        Signin
                    </Button>
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