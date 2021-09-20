import React, {useContext} from 'react'
import Navbar from '../components/Navbar'
import UserBar from '../components/UserBar'
// import pickUpLogo from '../assets/pickUpLogo.png'


export default function HeaderBar () {
    
    return (
        <div className='headerBar'>
          {/* <img
            src={pickUpLogo} alt='logo'
            className='pickUpLogo'
            ></img> */}
        <React.Suspense fallback={'Loading...'}>
          <Navbar />
                    {/* <UserBar /> */}

        </React.Suspense>
        <br />
        {/* {user && <p>Hello {user}</p>} */}
        </div>
    )
}