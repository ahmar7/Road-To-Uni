import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ProgressBar from "@ramonak/react-progress-bar";
import {
  Img,
  SquareIcon,
  BookmarkIcon,
  BrushIcon,
  WrenchIcon,
  GearIcon,
  MagnifyIcon,
  WorkImg,
  PlayIco,
  InfoIco,
  SliderImg,
  DashProfile,
} from "../../utils/allimg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-circular-progressbar/dist/styles.css";

import { dataDigitalBestSeller } from "../../data/data";
import imgGirl from "../../assets/img/defaultImage.jpg";

import "./zerodashboard.css";
const NewDashboard = () => {
  const [sideactive, setSideactive] = useState(false);

  const toggleBar = () => {
    setSideactive(true);
  };
  const closeBar = () => {
    setTimeout(() => {
      setSideactive(false);
    }, 300);
  };
  const [value, onChange] = useState(new Date());

  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: imgGirl,
    }));
  };

  const percentageclg = 0;
  const percentagemodule = 0;
  const percentageworkshop = 0;
  if (sideactive) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <div className="bg-dashboard">
      <div className="inner-dashboard">
        <div className="navigation-area">
          <div className="web-logo">
            <div onClick={toggleBar} className="dashboard-bar">
              <i class="fa-solid fa-bars"></i>
            </div>
            <img src={Img} alt="" />
          </div>
          <div onClick={closeBar} className={sideactive ? "overlay" : ""}></div>
          <div
            className={
              sideactive
                ? "show-dash  navigationbtn-area"
                : " navigationbtn-area "
            }
          >
            <ul>
              <li onClick={closeBar} className="nav-icon dashbrd mbl-view">
                <i class="fa-sharp fa-solid fa-x"></i>
              </li>
              <li className="nav-active">
                <div className="ico">
                  <img src={SquareIcon} alt="" />
                </div>
                <div className="ico-btn">
                  <button>Dashboard</button>
                </div>
              </li>
              <li>
                <div className="ico">
                  <img src={BookmarkIcon} alt="" />
                </div>
                <div className="ico-btn">
                  <button>Modules</button>
                </div>
              </li>
              <li>
                <div className="ico">
                  <img src={BrushIcon} alt="" />
                </div>
                <div className="ico-btn">
                  <button>Workspace</button>
                </div>
              </li>
              <li>
                <div className="ico">
                  <img src={WrenchIcon} alt="" />
                </div>
                <div className="ico-btn">
                  <button>Resources</button>
                </div>
              </li>
              <li>
                <div className="ico">
                  <img src={GearIcon} alt="" />
                </div>
                <div className="ico-btn">
                  <button>Settings</button>
                </div>
              </li>
            </ul>
            <div className="absolute-sign">
              <Link>Sign out</Link>
            </div>
          </div>
        </div>
        <div className="dashboard-area">
          <div className="dash-field">
            <img src={MagnifyIcon} alt="" />
            <input
              type="text"
              placeholder="Search modules, documents, and more"
            />
          </div>
          <div className="work-area">
            <h3>How it works</h3>
            <div className="img-para">
              <div className="paragraph">
                <p>Applying to college is a whole project! We get it. </p>
                <ol>
                  <li>
                    <b>Learn </b> everything you need to know to make the right
                    decisions through your <b>Modules</b> .
                  </li>
                  <br />
                  <li>
                    <b>Track</b> your to-do’s in your <b>Workspace</b> .
                  </li>
                </ol>
              </div>
              <div className="work-img">
                <img src={WorkImg} alt="" />
              </div>
            </div>
            <div className="start-btn">
              <button>Get Started</button>
              <span className="how-heading">
                <span> See how it works</span>
                <img src={PlayIco} alt="" />
              </span>
            </div>
          </div>
          <div className="circular-progress">
            <div className="progress-heading">
              <h3>My Progress</h3>
              <img src={InfoIco} alt="" />
            </div>
            <div className="progress-circle">
              <div className="per-area bg1 new">
                <CircularProgressbar value={percentageclg} text={`${0}%`} />
                <p>My College Apps</p>
              </div>
              <div className="per-area bg2 new">
                <CircularProgressbar value={percentagemodule} text={`${0}%`} />
                <p>My Modules</p>
              </div>
              <div className="per-area bg3 new">
                <CircularProgressbar
                  value={percentageworkshop}
                  text={`${0}%`}
                />
                <p>My Workspace</p>
              </div>
            </div>
          </div>
        </div>
        <div className="event-area">
          <div className="dash-profile">
            <img src={DashProfile} alt="" />
          </div>
          <div className="calender-area">
            <Calendar onChange={onChange} value={value} />
            <div className="imp-dates">
              <h3>Important Dates</h3>
              <div className="date-notes">
                <div className="date-name">
                  <p>1</p>
                  <p>Jan</p>
                </div>
                <div className="date-para">
                  <h5>Regular Decision</h5>
                  <p>Most Common Application Deadline</p>
                </div>
              </div>
              <div className="date-notes">
                <div className="date-name">
                  <p>6</p>
                  <p>Jan</p>
                </div>
                <div className="date-para">
                  <h5>ACT</h5>
                  <p>Registration Deadline</p>
                </div>
              </div>
              <div className="date-notes">
                <div className="date-name">
                  <p>15</p>
                  <p>Jan</p>
                </div>
                <div className="date-para">
                  <h5>CSS Profile</h5>
                  <p>General Deadline</p>
                </div>
              </div>
              <div className="date-notes">
                <div className="date-name">
                  <p>15</p>
                  <p>Jan</p>
                </div>
                <div className="date-para">
                  <h5>FAFSA - College</h5>
                  <p>General Deadline</p>
                </div>
              </div>
              <div className="date-notes">
                <div className="date-name">
                  <p>15</p>
                  <p>Jan</p>
                </div>
                <div className="date-para">
                  <h5>Regular Decision</h5>
                  <p>Second Most Common Application Deadline</p>
                </div>
              </div>
              <div className="date-notes">
                <div className="date-name">
                  <p>20</p>
                  <p>Jan</p>
                </div>
                <div className="date-para">
                  <h5>ACT</h5>
                  <p>Late Registration Deadline</p>
                </div>
              </div>
              <div className="date-notes">
                <div className="date-name">
                  <p>1</p>
                  <p>Feb</p>
                </div>
                <div className="date-para">
                  <h5>CUNY</h5>
                  <p>RD Application Deadline</p>
                </div>
              </div>
              <div className="date-notes">
                <div className="date-name">
                  <p>1</p>
                  <p>Feb</p>
                </div>
                <div className="date-para">
                  <h5>CUNY</h5>
                  <p>
                    The City College Grove School of Engineering Application
                    Deadline
                  </p>
                </div>
              </div>
              <div className="date-notes">
                <div className="date-name">
                  <p>1</p>
                  <p>Feb</p>
                </div>
                <div className="date-para">
                  <h5>CUNY</h5>
                  <p>Queens College: Aaron Copland School of Music</p>
                </div>
              </div>
              <div className="date-notes">
                <div className="date-name">
                  <p>1</p>
                  <p>Feb</p>
                </div>
                <div className="date-para">
                  <h5>CUNY</h5>
                  <p>
                    The City College Bernard and Anne Spitzer School of
                    Artchitecture Application Deadline
                  </p>
                </div>
              </div>
              <div className="date-notes">
                <div className="date-name">
                  <p>3</p>
                  <p>Feb</p>
                </div>
                <div className="date-para">
                  <h5>ACT</h5>
                  <p>Standby Deadline/Photo Upload Deadline</p>
                </div>
              </div>
              <div className="date-notes">
                <div className="date-name">
                  <p>10</p>
                  <p>Feb</p>
                </div>
                <div className="date-para">
                  <h5>SAT</h5>
                  <p>Registration Deadline</p>
                </div>
              </div>
              <div className="date-notes">
                <div className="date-name">
                  <p>11</p>
                  <p>Feb</p>
                </div>
                <div className="date-para">
                  <h5>ACT</h5>
                  <p>Test Date</p>
                </div>
              </div>
              <div className="date-notes">
                <div className="date-name">
                  <p>28</p>
                  <p>Feb</p>
                </div>
                <div className="date-para">
                  <h5>SAT</h5>
                  <p>
                    Deadline for Changes, Regular Cancellation, and Late
                    Registration
                  </p>
                </div>
              </div>
              <div className="date-notes">
                <div className="date-name">
                  <p>10</p>
                  <p>Mar</p>
                </div>
                <div className="date-para">
                  <h5>ACT</h5>
                  <p>Registration Deadline</p>
                </div>
              </div>
              <div className="date-notes">
                <div className="date-name">
                  <p>11</p>
                  <p>Mar</p>
                </div>
                <div className="date-para">
                  <h5>SAT</h5>
                  <p>Test Date</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewDashboard;
