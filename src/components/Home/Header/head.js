import React from "react";
import { Managment } from "../../../utils/allimg";
import "./head.css";
const Head = () => {
  return (
    <div className="main-section">
      <div className="head">
        <div className="head-left">
          <h3 className="top-heading">
            The Best <br /> College Application <br />
            <span className="gradient"> Project Management</span> Tool
          </h3>
          <p>Easy-to-use for students, impactful for counselors!</p>
          <button className="orange-btn">Try Road to Uni </button>
        </div>
        <div className="head-right text-center">
          <img src={Managment} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Head;
