import React from "react";
import { Down, Up, FaqImg } from "../../../utils/allimg";
import "./faq.css";

const Faq = () => {
  return (
    <div className="main-section faq mt">
      <div className="faq-area">
        <h3 className="our-mission">Frequently Asked Questions</h3>
        <div className="faq-para">
          <div className="faq-up">
            <div className="para-flex">
              <div className="paras">
                <img className="up-arrow" src={Up} alt="" />
                <h4>Who is Road to Uni for?</h4>
                <img className="down-arrow" src={Down} alt="" />
                <p>
                  Road to Uni is primarily for first-generation, low-income
                  students who live and how to high school in the U.S and who
                  want to apply to colleges within the U.S.{" "}
                </p>
              </div>
              <div className="paras top-marg">
                <img className="up-arrow" src={Up} alt="" />
                <h4>Is Road to Uni free?</h4>
                <img className="down-arrow" src={Down} alt="" />
                <p>
                  Yes! Road to Uni is free for first-generation, low-incomes
                  students anywhere in the U.S who feel that they need accurate
                  information, guidance, and support to apply to college.
                </p>
              </div>
            </div>
            <div className="img-flex">
              <img src={FaqImg} alt="" />
            </div>
          </div>
          <div className="paras top-marg">
            <img className="up-arrow" src={Up} alt="" />
            <h4>
              I’m a counselor. Does Road to Uni have tools for
              counselors/schools?
            </h4>
            <img className="down-arrow" src={Down} alt="" />
            <p>
              We are curruntly building tools for counselors as well! Please
              sign up for our newsletter to stay tuned to when we roll those
              out.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
