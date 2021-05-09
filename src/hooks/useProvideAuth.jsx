import { useState } from 'react'

function useProvideAuth() {
    const inLS = localStorage.getItem('user')
    const [authenticatted, setAuthenticatted] = useState((inLS) ? true : false)

    const signIn = (email, password) => {
        if ((email === "poc_app@mail.com") && (password === "123")) {
            localStorage.setItem('user', email)
            setAuthenticatted(true)
            console.log(authenticatted)
            return true
        }

        return false
    }

    const signOut = () => {
        localStorage.removeItem('user')
        setAuthenticatted(false)
    }

    return {
        authenticatted,
        signIn,
        signOut,
    }
}

export default useProvideAuth