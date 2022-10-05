import React from "react";
import { Img } from "../../utils/allimg";
import "./signup.css";
const SignupPage = () => {
  return (
    <div className="main-sign">
      <div className="sign-area">
        <div className=" left-orange"> </div>
        <div className=" right-white">
          <div className="uni-logo">
            <img src={Img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
