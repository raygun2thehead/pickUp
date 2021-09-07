import React, {useContext} from 'react'
// import CreatePost from '../post/CreatePost'
import Navbar from '../components/Navbar'
import UserBar from '../components/UserBar'
import {StateContext} from '../contexts'

export default function HeaderBar () {

    const {state} = useContext(StateContext)
    const {user} = state
    
    return (
        <div>
        <React.Suspense fallback={'Loading...'}>
          <UserBar />
          <Navbar />
        </React.Suspense>
        <br />
        {user && <p>Hello {user}</p>}
        {/* {user && <CreatePost />} */}
        </div>
    )
}