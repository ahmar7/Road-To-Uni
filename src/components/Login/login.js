import React from "react";
import { Link } from "react-router-dom";
import {
  Img,
  InsideImgs,
  ColorApple,
  ColorFb,
  ColorGoogle,
  FacebookIcon,
} from "../../utils/allimg";
import "./login.css";
const LoginPage = () => {
  return (
    <div className="main-sign">
      <div className="sign-area">
        <div className="popup-sign">
          <div className="inner-popup login-popup">
            <div className="top-li">
              <h6 className="welcome-tag">Welcome to Road to Uni.</h6>

              <h6 className="na-c">
                No Account ? <br />
                <span className="spc">
                  <Link to="/signup">Sign up</Link>
                </span>
              </h6>
            </div>
            <h3>Sign in</h3>
            <div className="input-fields sign-fields">
              <div className="block-field">
                <label htmlFor="">Enter your username or email address</label>
                <input
                  type="email"
                  required
                  placeholder="Username or email address"
                />
              </div>
              <br />

              <div className="block-field">
                <label htmlFor="">Enter your Password</label>
                <input required type="password" placeholder="Password" />
                <p className="forget-color">
                  <a href="">Forgot Password</a>
                </p>
              </div>
              <div className="signup-btn">
                <Link to="/userdashboard">
                  <button>Sign In</button>
                </Link>
              </div>
              <p className="opt">OR</p>
              <div className="other-links">
                <div className="google">
                  <img src={ColorGoogle} alt="" />
                  <span>Sign in with Google</span>
                </div>
                <div className="facebook">
                  <img src={ColorFb} alt="" />
                </div>
                <div className="apple">
                  <img src={ColorApple} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" left-orange"></div>
        <div className=" right-white">
          <div className="uni-logo">
            <Link to="/">
              <img src={Img} />
            </Link>
          </div>
          <div className="signup-img login-img">
            <img src={InsideImgs} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
