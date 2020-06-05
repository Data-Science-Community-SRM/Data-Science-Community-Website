import React from "react";

import classes from "./Home_Section3.module.css";
import domainsIMG from "../../assets/images/domains.svg";

const Home_Section2 = () => {
  return (
    <React.Fragment>
      <div className="mx-auto">
        <div className="col-12 text-center">
          <h1>DOMAINS.</h1>
          <h3>
            All those who love brainfood, listen up, we serve a lot of that here
            at our Data Science Community. From playing around with data to
            creating automatic players for your games. From connecting homes to
            connecting to the world. We got it all covered. Our members work
            across multiple disciplines to deliver their solutions for the
            world!
          </h3>
        </div>
        <div className="row mx-auto text-center">
          <div className="col-12 col-lg-6">
            <div className="row">
              <div className="col-6 mx-auto">
                <h4>Data Analytics</h4>
                <p>
                  Analyzing raw data using various manipulation and
                  visualization techniques to uncover insights and help
                  organizations make better decisions.
                </p>
              </div>
              <div className="col-6 mx-auto">
                <h4>Data Analytics</h4>
                <p>
                  Analyzing raw data using various manipulation and
                  visualization techniques to uncover insights and help
                  organizations make better decisions.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-6 mx-auto">
                <h4>Data Analytics</h4>
                <p>
                  Analyzing raw data using various manipulation and
                  visualization techniques to uncover insights and help
                  organizations make better decisions.
                </p>
              </div>
              <div className="col-6 mx-auto">
                <h4>Data Analytics</h4>
                <p>
                  Analyzing raw data using various manipulation and
                  visualization techniques to uncover insights and help
                  organizations make better decisions.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <img src={domainsIMG} alt="" width="90%" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home_Section2;
