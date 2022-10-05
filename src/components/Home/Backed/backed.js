import React from "react";
import { Backed1, Backed2, Backed3 } from "../../../utils/allimg";
import "./backed.css";
const Backed = () => {
  return (
    <div className="main-section mt">
      <div className="backed-heading">
        <h3>Backed By:</h3>
      </div>
      <div className="backed-img">
        <img src={Backed1} alt="" />
        <img src={Backed2} alt="" />
        <img src={Backed3} alt="" />
      </div>
    </div>
  );
};

export default Backed;
