import React from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../utils/UserContext";
import API from "../utils/API";


const SidebarNav = ({email}) => {
  const [state, dispatch] = useUserContext();

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
    localStorage.removeItem("created");
    localStorage.removeItem("going");
  }

  const setState = () => {
    dispatch({
      type: "setCurrentUser",
      email: "",
      created: "",
      _id: "",
      going: "",
    });
  };

  if (state.email) {
    return (
        <div className="navbar-expand navbar-dark bg-dark">
            <div className="nav-item">
              <Link to="/login"  onClick={logOut}>
              <div className="nav-item">Logout</div>
                </Link>
            </div>
        </div>
    );
  } else {
    return (
      <div className="navbar-expand ml-auto">
        <Link to="/login">
          <div className="nav-item">Login</div>
        </Link>

        <Link to="/register">
          <div className="nav-item">Register</div>
        </Link>
      </div>
    );
  };
}
export default SidebarNav;