import React from "react";

import classes from "./Home_Section1.module.css";
import homeLogo from "../../assets/images/home-logo.png";

const Home_Section1 = () => {
  return (
    <React.Fragment>
      <div className="row mx-auto">
        <div className="col-12 col-md-6 text-center">
          <img src={homeLogo} alt="dscommunity" width="250px" />
        </div>
        <div className="col-12 col-md-6 text-center text-md-left">
          <h1>Data Science Community SRM</h1>
          <h3>
            A Data Science-based student-led innovation community at SRM IST.
          </h3>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home_Section1;
