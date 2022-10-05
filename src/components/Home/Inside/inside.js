import React from "react";
import { InsideImgs, Frame1, Frame2, Frame3 } from "../../../utils/allimg";
import "./inside.css";
const Inside = () => {
  return (
    <div className="main-section mt">
      <div className="head">
        <div className="head-left">
          <h3 className="our-mission">What’s Inside</h3>
          <ul className="inside-ul">
            <li className="para-li">
              <img src={Frame1} alt="" />
              <p>
                <span className="bold-touch"> Lessons</span> that teach you
                exactly what you need to know to{" "}
                <span className="bold-touch">
                  successfully get into college
                </span>
                , from start to finish!
              </p>
            </li>
            <li className="para-li">
              <img src={Frame2} alt="" />
              <p>
                <span className="bold-touch"> Every tool </span>you’ll need to
                <span className="bold-touch"> organize yourself </span>
                throughout this journey.
              </p>
            </li>
            <li className="para-li">
              <img src={Frame3} alt="" />
              <p>
                Reliable databases of links to{" "}
                <span className="bold-touch">
                  resources, scholarships, templates,
                </span>
                and more!
              </p>
            </li>
            <li className=" align-right">
              <button className="orange-btn">Learn More</button>
            </li>
          </ul>
        </div>
        <div className="head-right text-center">
          <img src={InsideImgs} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Inside;
