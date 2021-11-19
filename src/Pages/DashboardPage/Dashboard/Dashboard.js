import React from "react";
import { Button } from "react-bootstrap";
import { useAuth } from "../../../hooks/useAuth";
import { NavLink } from "react-router-dom";
import "./Dashboard.css";
const Dashboard = () => {
  const { logout } = useAuth();
  const navStyle = {
    textDecoration: "none",
  };

  return (
    <div className="d-flex container">
      <div className="col-2 text-start dashboard">
        <div className="dashboard-link">
          <NavLink style={navStyle} to="/pay">
            <p>Pay</p>
          </NavLink>
          <NavLink style={navStyle} to="/orders">
            <p>My Orders</p>
          </NavLink>
          <NavLink style={navStyle} to="/review">
            <p>Review</p>
          </NavLink>
        </div>
        <Button onClick={logout} variant="danger">
          LogOut
        </Button>
      </div>
      <div className="col-10 mt-5 pt-5 text-center fw-bolder text-muted">
        <h1>Welcome</h1>
      </div>
    </div>
  );
};

export default Dashboard;
