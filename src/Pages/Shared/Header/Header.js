import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import "./Header.css";
import logo from "../../../images/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
const Header = () => {
  const navStyle = {
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
    marginTop: "10px",
  };
  const { user, logout } = useAuth();
  return (
    <Navbar className="navbar" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/home">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link style={navStyle} as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link style={navStyle} as={Link} to="/explore">
              Explore
            </Nav.Link>
            <Nav.Link style={navStyle} as={Link} to="/purchase">
              Purchase
            </Nav.Link>
            {user.email ? (
              <div className="m-3">
                <NavLink
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontWeight: "bold",
                  }}
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
                <Button className="ms-3" onClick={logout} variant="danger">
                  LogOut
                </Button>
              </div>
            ) : (
              <Nav.Link style={navStyle} as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
