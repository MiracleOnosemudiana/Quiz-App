import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const AuthenticationProvider = ({ children }) => {
    const [authenticted, setAuthenticated] = useState(false)


    const value = { authenticted, setAuthenticated }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error(`useAuth must be used within AuthenticationProvider`)
    } return context;
}

export { AuthenticationProvider, useAuth };
