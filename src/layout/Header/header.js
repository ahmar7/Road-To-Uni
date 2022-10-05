import React from "react";
import { Link, NavLink, Router } from "react-router-dom";

import { Img } from "../../utils/allimg";
import "./header.css";
const Header = () => {
  return (
    <div className="main-header">
      <div className="header">
        <div className="logo">
          <img src={Img} alt="" />
        </div>
        <div className="links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="">About</Link>
            </li>
            <li>
              <Link to="">Blog</Link>
            </li>
            <li className="login-btn">
              <Link to="/login">Log In</Link>
            </li>
            <li className="signup-btn">
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
