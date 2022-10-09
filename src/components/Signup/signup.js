import React from "react";
import { Link } from "react-router-dom";
import { Img, SignupImg } from "../../utils/allimg";
import "./signup.css";
const SignupPage = () => {
  return (
    <div className="main-sign">
      <div className="sign-area">
        <div className="popup-sign">
          <div className="inner-popup">
            <p>
              Have an Account ? <br />
              <span className="spc">
                <Link to="/login"> Sign in</Link>
              </span>
            </p>
            <h3>Sign up</h3>
            <div className="input-fields">
              <div className="block-field">
                <label htmlFor="">Enter your username or email address</label>
                <input
                  required
                  type="email"
                  placeholder="Username or email address"
                />
              </div>
              <div className="inline-field">
                <div className="half-field">
                  <label htmlFor="">User name</label>
                  <input
                    required
                    className="less-width"
                    type="text"
                    placeholder="User name"
                  />
                </div>
                <div className="half-field left-align">
                  <label htmlFor="">Contact Number</label>
                  <input
                    required
                    className="less-width"
                    type="number"
                    placeholder="Contact Number"
                  />
                </div>
              </div>
              <div className="block-field">
                <label htmlFor="">Enter your Password</label>
                <input required type="password" placeholder="Password" />
              </div>
              <div className="signup-btn">
                <Link to="/newdashboard">
                  <button>Sign Up</button>
                </Link>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className=" left-orange"></div>
        <div className=" right-white">
          <div className="uni-logo">
            <Link to="/">
              {" "}
              <img src={Img} />
            </Link>
          </div>
          <div className="signup-img">
            <img src={SignupImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
