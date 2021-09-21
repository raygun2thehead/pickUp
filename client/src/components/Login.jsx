import React, { useContext } from 'react';
import UserContext from '../utils/UserContext';

export default function Login () {
    const { userData, handleInputChange, handleLogin } = useContext(UserContext);

    return(
        <div>
        <form>
            <label 
            htmlFor="username" className='userBarItem'>Username:</label>
            <input 
            type="text" 
            name="username" 
            id="username"
            placeholder='username'
            value={userData.username}
            onChange={handleInputChange}
            className='userBarItem' />
            <label htmlFor="login-password" className='userBarItem'>Password:</label>
            <input 
            type="password" 
            name="password" 
            id="password"
            placeholder='password'
            value={userData.password}
            onChange={handleInputChange}
            className='userBarItem' />
            <button onClick={handleLogin} block>
                Login
            </button>
        </form>
        </div>
    )
}