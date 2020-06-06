import React from "react";

import classes from "./Home_Section3.module.css";
import domainsIMG from "../../assets/images/domains.svg";

const Home_Section2 = () => {
  return (
    <React.Fragment>
      <div className="mx-auto">
        <div className={classes.main + " col-12 col-lg-8 mx-auto text-center"}>
          <h1 data-aos="flip-up">
            <span style={{ color: "#6F389F" }}>O</span>UR DOMAINS.
          </h1>
          <p>
            All those who love brainfood, listen up, we serve a lot of that here
            at our Data Science Community. From playing around with data to
            creating automatic players for your games. From connecting homes to
            connecting to the world. We got it all covered. Our members work
            across multiple disciplines to deliver their solutions for the
            world!
          </p>
        </div>
        <div className="row mx-auto text-center">
          <div className="col-12 col-lg-5">
            <div className="row">
              <div
                data-aos="fade-down-right"
                className={classes.card + " col-12 col-lg-6"}
              >
                <h4>Data Analytics</h4>
                <p>
                  Analyzing raw data using various manipulation and
                  visualization techniques to uncover insights and help
                  organizations make better decisions.
                </p>
              </div>
              <div
                data-aos="fade-down-left"
                className={classes.card + " col-12 col-lg-6"}
              >
                <h4>AI/ML</h4>
                <p>
                  Creating and deploying models that exhibit intelligence to
                  solve complex real-world problems in the realm of
                  computational, cognitive and information science.
                </p>
              </div>
            </div>
            <div className="row">
              <div
                data-aos="fade-up-right"
                className={classes.card + " col-12 col-lg-6"}
              >
                <h4>Web Development</h4>
                <p>
                  Developing and maintaining websites with intuitive user
                  interface and seamless user experience along with precise
                  server-side web application logic.
                </p>
              </div>
              <div
                data-aos="fade-up-left"
                className={classes.card + " col-12 col-lg-6"}
              >
                <h4>Blockchain</h4>
                <p>
                  Optimizing blockchain protocols, crafting and developing the
                  architecture of systems, smart contracts and web apps using
                  blockchain technology.
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in-left"
            className={classes.img + " col-12 col-lg-7"}
          >
            <img src={domainsIMG} alt="domains" width="90%" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home_Section2;
