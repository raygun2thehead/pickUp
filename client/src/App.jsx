import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import PickUps from './components/PickUps';
import Map2 from './components/Map2';
import { UserProvider } from './utils/UserContext';


function App() {
  return (
    <UserProvider>
    <Router>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <Sidebar />
            </div>
            <div className="col-lg-9 main">
              <Navbar />
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/map">
                  <Map2 />
                </Route>
                <Route path="/pickups" component={PickUps} />
                <Route>
                  <Redirect to="/" />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
    </Router>
   </UserProvider>
  );
}

export default App;