import React, { useState } from "react";
import "./Login.css";
import { FloatingLabel, Form, Button, Spinner, Alert } from "react-bootstrap";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, signinUser, loading, error } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;

    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    signinUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  return (
    <div>
      <h1 className="mt-5 fw-bolder">Login</h1>
      <div>
        {!loading && (
          <form onSubmit={handleLoginSubmit} className="form">
            <FloatingLabel
              controlId="floatingInput"
              label="Email"
              className="mb-3"
            >
              <Form.Control
                onBlur={handleOnChange}
                type="email"
                required
                name="email"
                placeholder="name@example.com"
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control
                onBlur={handleOnChange}
                type="password"
                name="password"
                required
                placeholder="Password"
              />
            </FloatingLabel>

            <Button className="mt-3" variant="success" type="submit">
              Sign in
            </Button>
          </form>
        )}

        {loading && <Spinner animation="border" />}
        {user?.email && <Alert variant="success">Successfully logged in</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}

        <p>-------------------------</p>
        <NavLink style={{ textDecoration: "none" }} to="/registration">
          <Button variant="text">
            New user?
            <code className="text-decoration-underline">Please Register</code>
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default Login;
