import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import API from "../utils/API";
import { useUserContext } from "../utils/UserContext";

export default function Register() {
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
  }

  const register = () => {
    API.userRegister({
      email: email,
      password: password,
    })
      .then((res) => {
        if (res.data === "User Already Exists") {
          alert("This email is already in use");
        } else {
          window.location = "/login";
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="col-md-12">
      <div className="card card-container Login">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="email">
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
              autoFocus
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="form-group">
            <button 
            className="btn btn-primary btn-block"
            type="submit"
            onClick={register}
            >Sign Up</button>
          </div>
        </Form>
      </div>
    </div>
  );
};

