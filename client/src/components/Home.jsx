import React, { Image, LinearGradient } from "react";
import parkBg from '../assets/parkBg.jpg'
import pickUpLogo from '../assets/pickUpLogo.png'
// import UserService from "../services/user.service";

const Home = () => {

    // useEffect(() => {
    //     UserService.getPublicContent().then(
    //         (response) => {
    //             setContent(response.data);
    //         },
    //         (error) => {
    //             const _content =
    //                 (error.response && error.response.data) ||
    //                 error.message ||
    //                 error.toString();

    //             setContent(_content);
    //         }
    //     );
    // }, []);

    return (
        <div className="home">
            <img 
            src={parkBg} 
            alt="load" 
            className="homePhoto"
            style={{
                width: '100%',
                height: '100%',
                opacity: '75%'
            }}
            >   
            </img>
            
            <img
            src={pickUpLogo}
            className='pickUpLogo'
            ></img>
            <div className="logoDiv">
            </div>
            <p></p>
        </div>
    )
}

export default Home;
