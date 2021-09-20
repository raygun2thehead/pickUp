import React, {useContext} from 'react'
import Navbar from '../components/Navbar'
// import pickUpLogo from '../assets/pickUpLogo.png'
// import UserContext from '../utils/UserContext'


export default function HeaderBar () {
    // const user = useContext(UserContext) 

    return (
        <div className='headerBar'>
          {/* <img
            src={pickUpLogo} alt='logo'
            className='pickUpLogo'
            ></img> */}
        <React.Suspense fallback={'Loading...'}>
          <Navbar />
        </React.Suspense>
        <br />
        {/* {user && <p>Hello {user}</p>} */}
        </div>
    )
}