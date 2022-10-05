import React from "react";
import { MissionImg } from "../../../utils/allimg";
import "./mission.css";
const Mission = () => {
  return (
    <div className="main-section mt">
      <div className="head">
        <div className="head-left text-right mission-left">
          <img src={MissionImg} alt="" />
        </div>
        <div className="head-right mission-right">
          <h3 className="our-mission">Our Mission</h3>
          <p className="mission-para">
            To guide first-generation, low-income students in successfully
            navigating the convoluted world of college admissions, anywhere, at
            anytime.{" "}
          </p>
          <p className="mission-highlight">
            Road to Uni is a registered 501 c(3) non-profit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
