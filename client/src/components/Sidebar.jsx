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
              <div className="sidebarName">search <span>components</span></div>
        </div>
    )
}

export default Sidebar;

