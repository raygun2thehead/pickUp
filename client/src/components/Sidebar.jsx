import React from 'react';
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
// import Home from "./Home";
import Profile from "./Profile";
import User from "./User";
import SidebarNav from './SidebarNav';


const Sidebar = () => {

    return (
        <div className="sidebar">
            <SidebarNav />
            
      <div className="container mt-3">
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/user" component={User} />
        </Switch>
      </div>
              <div className="sidebarName">search <span>components</span></div>
        </div>
    )
}

export default Sidebar;

