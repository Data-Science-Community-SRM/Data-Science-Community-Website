import React from "react";

import classes from "./Home_Section1.module.css";
import homeLogo from "../../assets/images/home-logo.png";

const Section1 = () => {
  return (
    <React.Fragment>
      <div className="row mx-auto" style={{ minHeight: "100vh" }}>
        <div
          className={classes.logoRotation + " col-12 col-lg-6 text-center mt-5"}
        >
          <div className="mt-5">
            <img src={homeLogo} alt="dscommunity" width="70%" />
          </div>
        </div>
        <div className="col-12 col-lg-4 text-center text-lg-left">
          <div className={classes.main}>
            <h1 className={classes.animation}>Data Science Community SRM</h1>
            <p>
              We are a technology-driven Data Science-based student-led
              innovation community at SRM IST. <br />
              Our aim is to foster development and entrepreneurial skills among
              students and work as a community that inspires thousands.
            </p>
          </div>
        </div>
        <div
          id="section01"
          className={classes.scrollAnchor + " d-none d-lg-block"}
        >
          <a href="#section02">
            <span></span>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Section1;
