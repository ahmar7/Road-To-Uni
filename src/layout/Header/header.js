import React, { useState } from "react";
import { Link, NavLink, Router } from "react-router-dom";

import { Img } from "../../utils/allimg";
import "./header.css";
import "./animation.css";
const Header = () => {
  const [sideactive, setSideactive] = useState(false);

  const toggleBar = () => {
    setSideactive(true);
  };
  const closeBar = () => {
    setTimeout(() => {
      setSideactive(false);
    }, 300);
  };

  if (sideactive) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  window.addEventListener("scroll", function () {
    let header = this.document.querySelector("#header2");

    if (window.scrollY > 150) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });
  return (
    <div className="main-header">
      <div className="header">
        <div className="logo">
          <img src={Img} alt="" />
        </div>

        <div onClick={closeBar} className={sideactive ? "overlay" : ""}></div>
        <div className="links">
          <ul className={sideactive ? "animate-it " : "hide-it "}>
            <li onClick={closeBar} className="nav-icon mbl-view">
              <i class="fa-sharp fa-solid fa-x"></i>
            </li>
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
          <span onClick={toggleBar} className="nav-icon">
            {" "}
            <i class="fa-solid fa-bars"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
