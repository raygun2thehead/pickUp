import React, {useContext} from 'react'
// import CreatePost from '../post/CreatePost'
import Navbar from '../components/Navbar'
import {StateContext} from '../utils/contexts'

export default function HeaderBar () {

    const {state} = useContext(StateContext)
    const {user} = state
    
    return (
        <div>
        <React.Suspense fallback={'Loading...'}>
          <Navbar />
        </React.Suspense>
        <br />
        {user && <p>Hello {user}</p>}
        {/* {user && <CreatePost />} */}
        </div>
    )
}