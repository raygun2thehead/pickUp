import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
// import Home from "./Home";
import User from "./User";
import SidebarNav from './SidebarNav';
import { useUserContext } from "../utils/UserContext";


const Sidebar = () => {
  const [state, dispatch] = useUserContext();

  return (
    <Router>
      <div className="sidebar">
        <SidebarNav />

        <div className="container mt-0">
          <Switch>
            <Route 
            exact path="/login" 
            render={() => <Login useremail={state.email} />}
            >
              </Route> 
            <Route exact path="/register" component={Register} />
            <Route path="/user" component={User} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default Sidebar;

