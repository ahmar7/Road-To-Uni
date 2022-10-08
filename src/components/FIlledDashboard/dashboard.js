import React from "react";
import { Link } from "react-router-dom";
import {
  Img,
  SquareIcon,
  BookmarkIcon,
  BrushIcon,
  WrenchIcon,
  GearIcon,
  MagnifyIcon,
} from "../../utils/allimg";
import Carousel from "./Carousel/carousel";
import "./dashboard.css";
const Dashboard = () => {
  return (
    <div className="bg-dashboard">
      <div className="inner-dashboard">
        <div className="navigation-area">
          <div className="web-logo">
            <img src={Img} alt="" />
          </div>
          <div className="navigationbtn-area">
            <ul>
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
          <div className="work-area"></div>
        </div>
        <div className="event-area"></div>
      </div>
    </div>
  );
};

export default Dashboard;
