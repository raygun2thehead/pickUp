import React, {useEffect} from 'react'
import {useInput} from 'react-hookedup'
import {useDispatch, useAPIRegister} from '../hooks'

export default function Register() {
    const dispatch = useDispatch()
    
    const { value: email, bindToInput: bindUsername } = useInput('')
    const { value: password, bindToInput: bindPassword } = useInput('')
    const { value: passwordRepeat, bindToInput: bindPasswordRepeat } = useInput('')


    const [user, register] = useAPIRegister()

    useEffect(() => {
        if (user && user.data) {
            dispatch ({ type: 'REGISTER', email: user.data.email})
        }
    }, [dispatch, user])

    return (
        <form onSubmit={e => {e.preventDefault(); register(email, password) }}>
            <label htmlFor="register-email" className='userBarItem'>Email:</label>
            <input type="text" value={email} {...bindUsername} name="register-email" id="register-email" className='userBarItem' />
            <label htmlFor="register-password" className='userBarItem'>Password:</label>
            <input type="password" value={password} {...bindPassword} name="register-password" id="register-password" className='userBarItem' />
            <label htmlFor="register-password-repeat" className='userBarItem'>Repeat password:</label>
            <input type="password" value={passwordRepeat} {...bindPasswordRepeat} name="register-password-repeat" id="register-password-repeat" className='userBarItem' />
            <input type="submit" value="Register" disabled={email.length === 0 || password.length === 0 || password !== passwordRepeat} className='userBarItem'  />
        </form>
    )
}