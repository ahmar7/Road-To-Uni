import React from "react";
import { Link } from "react-router-dom";
import {
  FacebookIcon,
  InstagramIcon,
  LinkdinIcon,
  SendButton,
  WhiteLogo,
  YoutubeIcon,
} from "../../utils/allimg";
import "./footer.css";
const Footer = () => {
  return (
    <div className="main-footer ">
      <div className="footer    ">
        <div className="white-logo">
          <img src={WhiteLogo} alt="" />
          <p>info@roadtouni.org </p>
        </div>
        <div className="sub-section">
          <h4>Subscribe to our Newsletter!</h4>
          <p>
            Stay up to date with the latest news and information from Road to
            Uni.
          </p>
          <div className="input-sec">
            <input type="text" placeholder="Enter your email address" />
            <button>
              <img src={SendButton} alt="" />
            </button>
          </div>
          <div className="social-links">
            <h6>Follow us</h6>
            <ul>
              <li>
                <a href="">
                  <img src={InstagramIcon} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={YoutubeIcon} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={FacebookIcon} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={LinkdinIcon} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="white-logo">
          <ul className="footer-ul">
            <li>
              <Link to="">About Us</Link>
            </li>
            <li>
              <Link to="">Contact Us</Link>
            </li>
            <li>
              <Link to="">Terms</Link>
            </li>
            <li>
              <Link to="">Privacy</Link>
            </li>
          </ul>
        </div>
      </div>
      <h3 className="copyright">© 2022 Road to Uni. All Right Reserved.</h3>
    </div>
  );
};

export default Footer;
