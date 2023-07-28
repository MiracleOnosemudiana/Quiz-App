import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './context/authContext';
import { useToggle } from './context/toggleContext';

const Navbar = () => {
    const { authenticted, setAuthenticated } = useAuth()
    const { navToggle, setNavToggle } = useToggle()

    const handleLogOut = () => {
        let isAuth;
        isAuth = localStorage.getItem('isLoggedIn')
        isAuth = localStorage.setItem('isLoggedIn', JSON.stringify(false))
        setAuthenticated(JSON.parse(isAuth))
    }

    const handleToggleNavBar = () => {
        setNavToggle(!navToggle)
    }

    const closeNav = () => {
        setNavToggle(false)
    }

    useEffect(() => {

        setNavToggle(false)
    }, []);

    return (
        <div>
            <div className={`topnav ${navToggle && 'responsive'}`} id="myTopnav">
                <Link to='/' className="active" onClick={closeNav}> Home</Link>
                <Link to='/quiz' onClick={closeNav}>Take a Quiz</Link>
                <Link to='/add-questions' onClick={closeNav}>Add Question</Link>
                <Link to='/remove-questions' onClick={closeNav}>Remove Question</Link>
                <Link onClick={handleLogOut}>Log Out</Link>
                <Link className="icon" onClick={handleToggleNavBar}> {navToggle ? <i className="fa fa-close" aria-hidden="true"></i> : <i className="fa fa-bars" aria-hidden="true"></i>}</Link>



            </div>
        </div>
    );
}

export default Navbar;
