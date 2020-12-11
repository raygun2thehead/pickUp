import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";

import AuthService from "../services/auth.service";

import Login from "./Login";
import Register from "./Register";
// import Home from "./Home";
import Profile from "./Profile";
import User from "./User";
// import BoardModerator from "./components/BoardModerator";
// import BoardAdmin from "./components/BoardAdmin";

const SidebarNav = () => {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <div>
      <div className="navbar-expand navbar-dark bg-dark sidebarNav">
        <div className="navbar-nav mr-auto">

          {currentUser && (
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                User
              </Link>
            </li>
          )}
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
          <Link to="/login">
              <div className="nav-item">Login</div>
          </Link>

          <Link to="/register">
              <div className="nav-item">Register</div>
          </Link>
          </div>
        )}
      </div>

      <div className="container mt-3">
        <Switch>
          {/* <Route exact path={["/", "/home"]} component={Home} /> */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/user" component={User} />
        </Switch>
      </div>
    </div>
  );
};

export default SidebarNav;