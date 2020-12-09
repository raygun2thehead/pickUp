import React, { useState, useEffect } from "react";
import load from '../assets/load.gif'
import UserService from "../services/user.service";

const Home = () => {
    const [content, setContent] = useState("");

    useEffect(() => {
        UserService.getPublicContent().then(
            (response) => {
                setContent(response.data);
            },
            (error) => {
                const _content =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();

                setContent(_content);
            }
        );
    }, []);

    return (
        <div className="home">
            <header className="jumbotron">
                <h3>{content}</h3>
            </header>
            <img src={load} alt="load" className="HomePhoto" />
        </div>
    )
}

export default Home;
