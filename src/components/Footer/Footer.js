import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import classes from "./Footer.module.css";
import logo from "../../assets/images/home-logo.png";

const Footer = () => {
  return (
    <React.Fragment>
      <footer>
        <div className={classes.main + " row mx-0"}>
          <div className="col-6 col-md-3 text-center">
            <br />
            <img src={logo} alt="dscommunity" width="100px" />
          </div>
          <div className="col-6 col-md-3 text-left text-md-right">
            <ul>
              <li>
                <NavLink to="/">HOME</NavLink>
              </li>
              <li>
                <NavLink to="/events">EVENTS</NavLink>
              </li>
              <li>
                <NavLink to="/blog">BLOG</NavLink>
              </li>
              <li>
                <NavLink to="/people">PEOPLE</NavLink>
              </li>
              <li>
                <NavLink to="/contact-us">CONTACT US</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-3 text-right text-md-left">
            <ul>
              <br />
              <li>Reach Us</li>
              <li>
                <a
                  class="footer-refs"
                  href="https://www.linkedin.com/in/avirupchattaraj/"
                  target="_blank"
                >
                  Avirup Chattaraj
                </a>
              </li>
              <li>
                <a
                  class="footer-refs"
                  href="https://www.linkedin.com/in/hritikbhandari/"
                  target="_blank"
                >
                  Hritik Bhandari
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <br />
            <div className={classes.refs + " ml-5"}>
              <div className="row">
                <a href="https://twitter.com/bdsc_srm">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://www.linkedin.com/company/datasciencecommunitysrm">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
              <div className="row">
                <a href="https://www.instagram.com/bdsc_srm/">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://medium.com/data-science-community-srm">
                  <FontAwesomeIcon icon={faMedium} />
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 text-center">
            <p className={classes.caption}>
              Made with ☕ by your colleagues at the Data Science Community
            </p>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
