import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import classes from "./Footer.module.css";
import logo from "../../../assets/images/home-logo.png";

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
                  className="footer-refs"
                  href="https://www.linkedin.com/in/hritikbhandari/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hritik Bhandari
                </a>
              </li>
              <li>
                <a
                  className="footer-refs"
                  href="https://www.linkedin.com/in/pratyaksh-bhalla-96871b186/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pratyaksh Bhalla
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <br />
            <div className={classes.refs + " ml-5"}>
              <div className="row">
                <div className="m-lg-1">
                  <a
                    href="https://twitter.com/dscommunitysrm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </div>
                <div className="m-lg-1">
                  <a
                    href="https://www.linkedin.com/company/datasciencecommunitysrm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="m-lg-1">
                  <a
                    href="https://www.instagram.com/dscommunity_srm/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
                <div className="m-lg-1">
                  <a
                    href="https://github.com/Data-Science-Community-SRM"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 text-center">
            <p
              className={classes.caption}
              style={{ fontWeight: "400", color: "#696969" }}
            >
              Made with{" "}
              <span role="img" aria-label="jsx-a11y/hot-beverage">
                ☕
              </span>{" "}
              by your colleagues at the <b>Data Science Community</b>.
            </p>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
