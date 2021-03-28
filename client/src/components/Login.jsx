import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { useUserContext } from "../utils/UserContext";
import { Redirect } from "react-router-dom";
// import { Container } from "../components/Grid";

function Login({ useremail }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, dispatch] = useUserContext();

  useEffect(() => {
    //checks local storage to update state if state is empty
    let storageStatusId = JSON.parse(localStorage.getItem("_id"));
    let storageStatusEmail = JSON.parse(localStorage.getItem("email"));
    let storageStatusCreated = JSON.parse(localStorage.getItem("created"));
    let storageStatusGoing = JSON.parse(localStorage.getItem("going"));
    if (state._id === "" && storageStatusId) {
      dispatch({
        type: "setCurrentUser",
        email: storageStatusEmail,
        _id: storageStatusId,
        created: storageStatusCreated,
        going: storageStatusGoing,
      });
    } else {
      return;
    }
  }, [state._id, dispatch]);


  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(state._email);
  }

  //sets local storage
  const setLocal = (data) => {

    if (data.created.length && data.going.length) {
      localStorage.setItem("_id", JSON.stringify(data._id));
      localStorage.setItem("email", JSON.stringify(data.email));
      localStorage.setItem("created", JSON.stringify(data.created));
      localStorage.setItem("going", JSON.stringify(data.going));
    }
    else if (data.created.length && !data.going.length) {
      localStorage.setItem("_id", JSON.stringify(data._id));
      localStorage.setItem("email", JSON.stringify(data.email));
      localStorage.setItem("created", JSON.stringify(data.created));
      localStorage.setItem("going", JSON.stringify([]));
    }
    else if (!data.created.length && data.going.length) {
      localStorage.setItem("_id", JSON.stringify(data._id));
      localStorage.setItem("email", JSON.stringify(data.email));
      localStorage.setItem("created", JSON.stringify([]));
      localStorage.setItem("going", JSON.stringify(data.going));
    }
    else {
      localStorage.setItem("_id", JSON.stringify(data._id));
      localStorage.setItem("email", JSON.stringify(data.email));
      localStorage.setItem("created", JSON.stringify([]));
      localStorage.setItem("going", JSON.stringify([]));
    }

  };

  //sets state
  const setState = () => {

    let _id = JSON.parse(localStorage.getItem("_id"));
    let email = JSON.parse(localStorage.getItem("email"));
    let created = JSON.parse(localStorage.getItem("created"));
    let going = JSON.parse(localStorage.getItem("going"));

    dispatch({
      type: "setCurrentUser",
      _id: _id,
      email: email,
      created: created,
      going: going,
    });

  }

  //logs user in, invokes setStorage and setState
  const login = () => {
    API.userLogin({
      email: email,
      password: password,
    }).then(
      (res) => {
        if (res.status === 200) {
          if (res.data.email === email) {
            setLocal(res.data);
            setState();
            window.location = "/user";
          }
        }
      },
      () => {
        console.log("Login Failed");
      }
    );
  };

  return (
    <div className="col-md-12">
      <div className="card card-container">

        {useremail && <Redirect to="/home" />}
        <Form onSubmit={handleSubmit}>
          <Form.Group size="md" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="md" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Link to="/user">
            <button
              className="btn btn-primary btn-block"
              size="md"
              type="submit"
              disabled={!validateForm()}
              onClick={login}
            >
              Login
            </button>
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default Login;