import React from 'react';
// import { Switch, Route } from "react-router-dom";
// import Login from "./Login";
// import Register from "./Register";
// import Home from "./Home";
// import Profile from "./Profile";
// import User from "./User";
import SidebarNav from './SidebarNav';


const Sidebar = () => {

    return (
        <div className="sidebar">
            <SidebarNav />
              <div className="sidebarName">Steven <span>Schaab</span></div>
            <div className="sidebarName">Web Developer</div>
            <div className="contact">
                <div className="sidebarName">schaab.steven@gmail.com</div>
                <div className="sidebarName">773.656.9747</div>
                <div className="sidebarItem">
                    <a href="https://github.com/raygun2thehead">
                        <img src='' alt="github" className="icon" />Github</a>
                </div>
                <div className="sidebarItem">
                    <a href="linkedin.com/in/stevenschaab">
                        <img src='' alt="linkedin" className="icon" />Linked In</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;

