import React, { useState } from "react";
import { Alert, Spinner, Button, Form } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import "./Register.css";
const Registration = () => {
  const [loginData, setLoginData] = useState({});
  const { user, registerUser, loading, error } = useAuth();
  const history = useHistory();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    console.log(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Password did not match");
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };
  return (
    <div className="mt-5 pt-5">
      <h1 variant="h4">
        Create an account
      </h1>
      {!loading && (
        <form onSubmit={handleLoginSubmit} className="form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              onBlur={handleOnBlur}
              required
              name="email"
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              required
              name="password"
              onBlur={handleOnBlur}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Re-enter your password"
              required
              name="password2"
              onBlur={handleOnBlur}
            />
          </Form.Group>

          <Button variant="success" type="submit">
            Create Account
          </Button>
        </form>
      )}

      {loading && <Spinner animation="border" />}
      {user?.email && (
        <Alert sx={{ mt: 4, textAlign: "center" }} variant="success">
          Successfully registered. Please login to continue.
        </Alert>
      )}
      {error && <Alert variant="danger">{error}</Alert>}
      <NavLink style={{ textDecoration: "none" }} to="/login">
        <Button variant="text">
          Already Have an account?{" "}
          <code className="text-decoration-underline">Login</code>
        </Button>
      </NavLink>
    </div>
  );
};

export default Registration;
