import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import PickUps from './pages/PickUps';
import Map2 from './pages/Map2';


function App() {
  
  return (
    <Router>
        <div className="container">
            <div className=" main">
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
    </Router>
  );
}

export default App;