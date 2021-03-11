import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../utils/UserContext";
import API from "../utils/API";
// import "bootstrap/dist/css/bootstrap.min.css";

// import AuthService from "../services/auth.service";

// import Login from "./Login";
// import Register from "./Register";
// // import Home from "./Home";
// import Profile from "./Profile";
// import User from "./User";
// import BoardModerator from "./components/BoardModerator";
// import BoardAdmin from "./components/BoardAdmin";

const SidebarNav = () => {
  const [state, dispatch] = useUserContext();

  // useEffect(() => {
  //   const user = AuthService.getCurrentUser();

  //   if (user) {
  //     setCurrentUser(user);
  //   }
  // }, []);

  const logOut = () => {
    API.userLogout(state)
    .then((e) => {
      setLocal();
      setState();
    }) 
  };
  const setLocal = () => {
    localStorage.removeItem("_id");
    localStorage.removeItem("email");
    localStorage.removeItem("favs");
    localStorage.removeItem("shoppingList");
  }

  const setState = () => {
    dispatch({
      type: "setCurrentUser",
      email: "",
      favs: "",
      _id: "",
      shoppingCart: "", 
    });
  };

  return (
    <div>
      <div className="navbar-expand navbar-dark bg-dark sidebarNav">
        {/* <div className="navbar-nav mr-auto">

          {currentUser && (
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                User
              </Link>
            </li>
          )}
        </div> */}

        {state.email ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                {setLocal}
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
    </div>
  );
};

export default SidebarNav;