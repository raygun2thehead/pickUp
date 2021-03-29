import React, { useState, useEffect } from "react";
import parkBg from '../assets/parkBg.jpg'
// import UserService from "../services/user.service";

const Home = () => {
    const [content, setContent] = useState('');

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
            {/* <img src={parkBg} alt="load" className="HomePhoto" /> */}
        </div>
    )
}

export default Home;
