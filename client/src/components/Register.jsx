import React, { useContext, useEffect} from 'react'
import {useResource} from 'react-request-hook'
import {useInput} from 'react-hookedup'
import {StateContext} from '../contexts'

export default function Register() {
    const { dispatch } = useContext(StateContext)
    
    const { value: username, bindToInput: bindUsername } = useInput('')
    const { value: password, bindToInput: bindPassword } = useInput('')
    const { value: passwordRepeat, bindToInput: bindPasswordRepeat } = useInput('')


    const [user, register] = useResource((username, password) => ({
        url: '/users',
        method: 'post',
        data: {username, password}
    }))

    useEffect(() => {
        if (user && user.data) {
            dispatch ({ type: 'REGISTER', username: user.data.username})
        }
    }, [user])

    return (
        <form onSubmit={e => {e.preventDefault(); register(username, password) }}>
            <label htmlFor="register-username" className='userBarItem'>Username:</label>
            <input type="text" value={username} {...bindUsername} name="register-username" id="register-username" className='userBarItem' />
            <label htmlFor="register-password" className='userBarItem'>Password:</label>
            <input type="password" value={password} {...bindPassword} name="register-password" id="register-password" className='userBarItem' />
            <label htmlFor="register-password-repeat" className='userBarItem'>Repeat password:</label>
            <input type="password" value={passwordRepeat} {...bindPasswordRepeat} name="register-password-repeat" id="register-password-repeat" className='userBarItem' />
            <input type="submit" value="Register" disabled={username.length === 0 || password.length === 0 || password !== passwordRepeat} className='userBarItem'  />
        </form>
    )
}