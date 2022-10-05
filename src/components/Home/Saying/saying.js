import React from "react";
import {
  HeadingShadow,
  User1,
  User2,
  User3,
  Userbg,
} from "../../../utils/allimg";
import "./saying.css";
const Saying = () => {
  return (
    <div className="main-section say  ">
      <div className="saying-heading">
        <img src={HeadingShadow} alt="" />
        <h3>What People Are Saying</h3>
      </div>
      <div className="saying-para">
        <div className="user-image">
          <div className="inner-user">
            <img src={User1} alt="" />
          </div>
        </div>
        <div className="user-review">
          <p className="user-write">
            “Road to Uni presents key information like financial aid, components
            of a college application (and more!) and breaks down what can
            sometimes feel like a complex process into an easily digestible
            format. ”
          </p>
          <p className="user-name">Clarissa Delgado</p>
          <p className="user-handle">NYC DOE College Advisor</p>
        </div>
      </div>
      <div className="saying-para">
        <div className="user-image">
          <div className="inner-user">
            <img src={User2} alt="" />
          </div>
        </div>
        <div className="user-review">
          <p className="user-write">
            “Road to Uni taught me a lot about the college application process,
            how financial aid works and helped me feel more confident in what to
            write about for my essays!”
          </p>
          <p className="user-name">Shayla Beltran</p>
          <p className="user-handle">University of Chicago ‘25</p>
        </div>
      </div>
      <div className="saying-para">
        <div className="user-image">
          <div className="inner-user">
            <img src={User3} alt="" />
          </div>
        </div>
        <div className="user-review">
          <p className="user-write">
            “Road to Uni ensured that I explored all available options, pushing
            through barriers standing in my way, and focused only on the
            future.”
          </p>
          <p className="user-name">Ayman Siam</p>
          <p className="user-handle">New York University ‘23</p>
        </div>
      </div>
    </div>
  );
};

export default Saying;
