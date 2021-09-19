import React, {useContext} from 'react'
import { Switch, Route } from 'react-router'
import UserContext from '../utils/UserContext'
import Login from './Login'
import Signup from './Signup'

// const Logout = React.lazy(() => import('./Logout'))

export default function UserBar () {
    const {loggedIn} = useContext(UserContext)
    
    return (
        <div>
            {loggedIn ? (
                <div></div>
            ):(
                <div>
                <Login />
               
                <Signup />
               
                </div>
            )}
        </div>
    )
}