import React, { createContext, useContext, useState } from 'react';

const ToggleContext = createContext();

const ToggleProvider = ({ children }) => {
    const [navToggle, setNavToggle] = useState(false);


    const value = { navToggle, setNavToggle }
    return (
        <ToggleContext.Provider value={value}>
            {children}
        </ToggleContext.Provider>
    );
}

const useToggle = () => {
    const context = useContext(ToggleContext);
    if (!context) {
        throw new Error(`useToggle must be used within ToggleProvider`)
    } return context;
}

export { ToggleProvider, useToggle };
