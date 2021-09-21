import React from "react";
import parkBg from '../assets/parkBg.jpg'
import pickUpLogo from '../assets/pickUpLogo.png'


const Home = () => {

    return (
        <div className="home">
            <img 
            src={parkBg} 
            alt="load" 
            className="homePhoto"
            style={{
                width: '100%',
                height: '100%',
                opacity: '50%'
            }}
            >   
            </img>
            
            <img
            src={pickUpLogo} alt='logo'
            className='pickUpLogo'
            ></img>
        </div>
    )
}

export default Home;
