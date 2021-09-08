import React, {useEffect, useReducer} from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import HeaderBar from './pages/HeaderBar'
import Home from './pages/Home';
import PickUps from './pages/PickUps';
import Map2 from './pages/Map2';
import appReducer from './reducers'
import {StateContext} from './contexts'


function App() {
  const [state, dispatch] = useReducer(appReducer, { username: '', created: [], going: [], error: '' })
  const { user } = state

  useEffect(() => {
    if (user) {
      document.title = `${user} - PickUp`
    } else {
      document.title = `PickUp`
    }
  }, [user])
  
  return (
    <StateContext.Provider value={{state, dispatch}}>
    <Router>
            <div className=" main">
              <HeaderBar />
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
    </Router>
    </StateContext.Provider>
  );
}

export default App;