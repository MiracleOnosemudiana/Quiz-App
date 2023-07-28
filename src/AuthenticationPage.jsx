import React, { useState } from 'react';
import { useAuth } from './context/authContext';
import { Link, Route, Routes } from 'react-router-dom';

const AuthenticationPage = () => {
    return (
        <div className='flexer'>
            <Routes>
                <Route exact path='/login' element={<SignUp />} />
                <Route path='/' element={<Login />} />
            </Routes>
        </div>
    );
}

export default AuthenticationPage;

const Login = () => {
    const { authenticted, setAuthenticated } = useAuth()
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState('')
    const [togglePassword, setTogglePassword] = useState(false);

    const handleGetPassword = (e) => {
        let { value } = e.target
        setPassword(value)
    }
    const handleGetUserName = (e) => {
        let { value } = e.target
        setUserName(value)
    }

    const viewPassword = () => {
        setTogglePassword(!togglePassword)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            userName: userName.trim(),
            password: password.trim()
        }

        if (password.trim() === '' || userName.trim() === '') {
            alert('Please fill in the input fields')
        } else {
            let localUser;
            localUser = localStorage.getItem('UserDetails')
            localUser = JSON.parse(localUser)

            let isAuthenticated;
            isAuthenticated = localStorage.getItem('isLoggedIn')

            if (user.password === localUser.password && user.userName === localUser.userName) {
                isAuthenticated = JSON.stringify(true)
                isAuthenticated = localStorage.setItem('isLoggedIn', isAuthenticated)
                isAuthenticated = localStorage.getItem('isLoggedIn')
                setAuthenticated(JSON.parse(isAuthenticated))
                setPassword('')
                setUserName('')
            } else {
                alert(`incorrect username and password`);
            }
        }
    }
    return (
        <div>
            <form action="" className='wrapper' onSubmit={handleSubmit}>
                <h2>Login Form</h2>
                <br />
                <br />
                <div className='flex'>
                    <div>
                        <label htmlFor=""><b>User Name:</b></label>
                        <input
                            type="text"
                            value={userName}
                            className='input'
                            placeholder='Enter username'
                            onChange={handleGetUserName}
                        />
                    </div>
                    <div >
                        <label htmlFor=""><b>Password:</b></label>
                        <div className='displayInput'>
                            <input
                                type={`${togglePassword ? 'text' : 'password'}`}
                                value={password}
                                className='input'
                                placeholder='Enter password'
                                onChange={handleGetPassword}
                            />
                            <div onClick={viewPassword} className='icon' >
                                {togglePassword ? <i className="fa fa-eye" aria-hidden="true"></i> :
                                    <i className="fa fa-eye-slash" aria-hidden="true"></i>}
                            </div>
                        </div>
                    </div>

                </div>
                <br />
                <center>
                    <button type='submit'>Login</button><br /><br />
                    <Link to='/login' style={{ color: 'grey' }}>Don't have an account? Sign up</Link>
                </center>
            </form>
        </div>
    );
}


const SignUp = () => {
    const { authenticted, setAuthenticated } = useAuth()
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState('')
    const [togglePassword, setTogglePassword] = useState(false);


    const viewPassword = () => {
        setTogglePassword(!togglePassword)
    }

    const handleGetPassword = (e) => {
        let { value } = e.target
        setPassword(value)
    }
    const handleGetUserName = (e) => {
        let { value } = e.target
        setUserName(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            userName: userName.trim(),
            password: password.trim()
        }

        if (password.trim() === '' || userName.trim() === '') {
            alert('Please fill in the input fields')
        } else {
            let localUser;
            localUser = localStorage.getItem('UserDetails')
            localUser = localStorage.setItem('UserDetails', JSON.stringify(user))
            setPassword('')
            setUserName('')
        }

    }

    return (
        <div>
            <form action="" className='wrapper' onSubmit={handleSubmit}>
                <h2>SignUp Form</h2>
                <br />
                <br />
                <div className='flex'>
                    <div>
                        <label htmlFor=""><b>User Name:</b></label>
                        <input
                            type="text"
                            value={userName}
                            className='input'
                            placeholder='Enter username'
                            onChange={handleGetUserName}
                        />
                    </div>
                    <div>
                        <label htmlFor=""><b>Password:</b></label>
                        <div className='displayInput'>
                            <input
                                type={`${togglePassword ? 'text' : 'password'}`}
                                value={password}
                                className='input'
                                placeholder='Enter password'
                                onChange={handleGetPassword}
                            />
                            <div onClick={viewPassword} className='icon' >
                                {togglePassword ? <i className="fa fa-eye" aria-hidden="true"></i> :
                                    <i className="fa fa-eye-slash" aria-hidden="true"></i>}
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <center>
                    <button type='submit'>SignUp</button><br /><br />
                    <Link to='/' style={{ color: 'grey' }}>Already have an account? Log in</Link>
                </center>
            </form>
        </div>
    );
}
