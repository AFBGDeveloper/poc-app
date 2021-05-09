import React from 'react'
import AuthContext from './contexts/AuthContext'
import useProvideAuth from './hooks/useProvideAuth'

const ProvideAuth = ({ children }) => {
    const auth = useProvideAuth()

    return (
        <AuthContext.Provider value={ auth }>
            {children }
        </AuthContext.Provider>
    )
}

export default ProvideAuth
