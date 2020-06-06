import React from "react";

import classes from "./Home_Section1.module.css";
import homeLogo from "../../assets/images/home-logo.png";

const Section1 = () => {
  return (
    <React.Fragment>
      <div className="row mx-auto">
        <div
          className={classes.logoRotation + " col-12 col-lg-6 text-center mt-5"}
        >
          <img src={homeLogo} alt="dscommunity" width="60%" />
        </div>
        <div className="col-12 col-lg-4 text-center text-lg-left">
          <div className={classes.main}>
            <h1>Data Science Community SRM</h1>
            <p>
              A Data Science-based student-led innovation community at SRM IST.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Section1;
