import React, { useState, useEffect, useContext } from 'react'
import { Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';

const Signup = () => {
    const {
        userData,
        handleInputChange,
        handleSignup,
        failureMessage,
    } = useContext(UserContext);
    const [validUserName, setValidUserName] = useState(false);
    const [validPassword, setValidPassword] = useState(false);
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState({});

    useEffect((errorMessage) => {
        console.log(errorMessage);
    }, []);

    const handleConfirmPassword = (event) => {
        const { value } = event.target;
        setConfirmPassword(value);
    };

    const checkUsername = () => {
        const length = userData.username.length;
        if (length === 0) {
            setValidUserName(false);
            setErrorMessage({ ...errorMessage, username: '' });
        } else if (length < 4) {
            setValidUserName(false);
            setErrorMessage({
                ...errorMessage,
                username: 'Username should be at least 4 characters.',
            });
        } else {
            setValidUserName(true);
            setErrorMessage({ ...errorMessage, username: '' });
        }
    };

    const checkPassword = () => {
        // const strongPassword = new RegExp(
        //   /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
        // );
        // const valid = strongPassword.test(userData.password);
        const length = userData.password.length;
        if (length === 0) {
            setValidPassword(false);
            setErrorMessage({ ...errorMessage, password: '' });
        } else if (length < 4) {
            setValidPassword(false);
            setErrorMessage({
                ...errorMessage,
                password: 'Password should be at least 4 characters.',
            });
            // else if (!valid) {
            //   setValidPassword(false);
            //   setErrorMessage({
            //     ...errorMessage,
            //     password: 'Password should be at least 8 letters, 1 capital & 1 number',
            //   });
        } else {
            setValidPassword(true);
            setErrorMessage({ ...errorMessage, password: '' });
        }
    };

    const checkConfirmPassword = () => {
        if (confirmPassword.length === 0) {
            setIsConfirmed(false);
            setErrorMessage({ ...errorMessage, confirmPassword: '' });
        } else if (
            userData.password !== '' &&
            userData.password === confirmPassword
        ) {
            setIsConfirmed(true);
            setErrorMessage({ ...errorMessage, confirmPassword: '' });
        } else {
            setIsConfirmed(false);
            setErrorMessage({
                ...errorMessage,
                confirmPassword: 'Passwords must match',
            });
        }
    };

    return (
        <div>
            {failureMessage ? <Alert type="danger">{failureMessage}</Alert> : <p></p>}
            <form>
                <label htmlFor="username" className='userBarItem'>Username:</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder='username'
                    value={userData.username}
                    onChange={handleInputChange}
                    onBlur={checkUsername}
                    className='userBarItem' />
                <label htmlFor="password" className='userBarItem'>Password:</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder='password'
                    value={userData.password}
                    onChange={handleInputChange}
                    onBlur={checkPassword}
                    valid={validPassword}
                    className='userBarItem' />
                {errorMessage['password']}
                <label htmlFor="confirmPassword" className='userBarItem'>Repeat password:</label>
                <input
                    type="password"
                    name="password"
                    id="confirmPassword"
                    placeholder='confirm password'
                    value={confirmPassword}
                    onChange={handleConfirmPassword}
                    onKeyUp={checkConfirmPassword}
                    className='userBarItem' />
                {validUserName &&
                validPassword &&
                isConfirmed ? (
                    <button 
                    onClick={handleSignup}
                    color='success' block>
                        Signup
                    </button>
                ):(
                    <button 
                    onClick={handleSignup}
                    color='success' block disabled>
                        Signup
                    </button>
                )
                }
            </form>
        </div>
    )
}

export default Signup;