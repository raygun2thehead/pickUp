import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import API from './utils/API'
import Home from './pages/Home';
// import Profile from './pages/Profile';
// import Auth from './pages/Auth';
// import NoMatch from './pages/NoMatch';
import HeaderBar from './pages/HeaderBar'
// import { Container } from 'reactstrap';
import PickUps from './pages/PickUps';
import Map2 from './pages/Map';
import Signup from './components/Signup'
import Login from './components/Login'
import UserBar from './components/UserBar'
import UserContext from './utils/UserContext';

function App() {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
    created: '', 
    going: '',
  });
  const [loggedIn, setLoggedin] = useState(false);
  const [user, setUser] = useState(null);
  const [failureMessage, setFailureMessage] = useState(null);

  useEffect(() => {
    if (user) {
      document.title = `${user} - PickUp`
    } else {
      document.title = `PickUp`
    }
  }, [user])

  
  useEffect(() => {
    isLoggedIn();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  
  const handleLogin = (event) => {
    event.preventDefault();
    const data = {
      username: userData.username,
      password: userData.password,
    };
    if (userData.username && userData.password) {
      API.login(data)
        .then((user) => {
          if (user.data.loggedIn) {
            setLoggedin(true);
            setUser(user.data.user);

            console.log('log in successful');
            window.location.href = '/home';
          } else {
            console.log('Something went wrong :(');
            alert('Login failed, Please try again.');
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleSignup = (event) => {
    event.preventDefault();
    try {
      const data = {
        username: userData.username,
        password: userData.password,
        // created: userData.created,
        // going: userData.going,
      };
      if (userData.username && userData.password) {
        API.signup(data)
          .then((user) => {
            if (user.data === 'email is already in use') {
              alert('Email already in use.');
            }
            if (user.data.loggedIn) {
              if (user.data.loggedIn) {
                setLoggedin(true);
                setUser(user.data.user);
                console.log('log in successful');
                window.location.href = '/home';
              } else {
                console.log('something went wrong :(');
                console.log(user.data);
                setFailureMessage(user.data);
              }
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } catch (error) {
      console.log('App -> error', error);
    }
  };

  const isLoggedIn = () => {
    if (!loggedIn) {
      API.isLoggedIn().then((user) => {
        if (user.data.loggedIn) {
          setLoggedin(true);
          setUser(user.data.user);
        } else {
          console.log(user.data.message);
        }
      });
    }
  };

  const logout = () => {
    if (loggedIn) {
      API.logout().then(() => {
        console.log('logged out successfully');
        setLoggedin(false);
        setUser(null);
      });
    }
  };

  const contextValue = {
    userData,
    loggedIn,
    user,
    failureMessage,
    handleInputChange,
    handleLogin,
    handleSignup,
    logout,
  };
  
  return (
    <UserContext.Provider value={contextValue}>
    <Router>
            <div className="main">
              <HeaderBar />
              {/* <UserBar /> */}
              
            {/* <Switch>
                <Route exact path='/login'>
                <Login />
                </Route>
                <Route path='/signup'>
                <Signup />
                </Route>
            </Switch> */}
              <Switch>
              {/* <Route exact path="/login">
                  <Login />
                </Route>
              <Route exact path="/signup">
                  <Signup />
                </Route> */}
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
    </UserContext.Provider>
  );
}

export default App;