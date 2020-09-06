import React, { useContext } from "react";

import classes from "./Hero.module.css";
import homeLogo from "../../../assets/images/home-logo.png";
import homeLogoLight from "../../../assets/images/home-logo-light.png";
import { ThemeContext } from "../../../context/theme-context";

const Section1 = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <>
      <div className="row mx-auto" style={{ minHeight: "100vh" }}>
        <div
          className={classes.logoRotation + " col-12 col-lg-6 text-center my-auto"}
        >
          <div className="">
            <img
              src={themeContext.isDark ? homeLogo : homeLogoLight}
              alt="dscommunity"
              width="70%"
            />
          </div>
        </div>
        <div className="col-12 col-lg-4 text-center text-lg-left my-lg-auto">
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
        <div className={classes.scrollAnchor + " d-none d-lg-block"}>
          <a
            onClick={() =>
              document.getElementById("section02").scrollIntoView()
            }
          >
            <span></span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Section1;
