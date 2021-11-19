import React from "react";
import logo from "../../../images/logo.svg";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <img src={logo} alt="" />
      <p className="text-white pt-4">
        Brought to you buy <code>Rent Now</code> your driving partner
      </p>
      <p  className="text-muted"> &copy; All rights reserved by Rent Now</p>
    </div>
  );
};

export default Footer;
