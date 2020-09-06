import React from "react";

import classes from "./Focus.module.css";
import workshopIMG from "../../../assets/images/workshop.svg";
import trainingIMG from "../../../assets/images/training.svg";
import projectIMG from "../../../assets/images/project.svg";

const Home_Section2 = () => {
  return (
    <React.Fragment>
      <div className="mx-auto">
        <div className={classes.main + " col-12 col-lg-8 mx-auto text-center"}>
          <h1 data-aos="flip-up">
            <span style={{ color: "#6F389F" }}>O</span>UR FOCUS.
          </h1>
          <p>
            Here at Data Science Community , We make real-time projects, conduct
            researches, organize meetups, host events, and workshops primarily
            focusing on Data Science, Machine Learning, Al, Blockchain, IoT ,
            Web Development and more. We guide and teach all those who aspire to
            work in these fields and help them attain better skills and
            knowledge.
          </p>
        </div>
        <div className="row mx-auto text-center">
          <div
            data-aos={window.innerWidth < 768 ? "fade-up" : "fade-right"}
            className={classes.card + " col-12 col-lg-3"}
          >
            <img height="100" width="200" src={workshopIMG} alt="workshops" />
            <h4>WORKSHOPS</h4>
            <p>For the enthusiasts</p>
          </div>
          <div
            data-aos={window.innerWidth < 768 ? "fade-up" : "fade-down"}
            className={classes.card + " col-12 col-lg-3"}
          >
            <img height="100" width="200" src={projectIMG} alt="projects" />
            <h4>PROJECTS</h4>
            <p>For the effectuators</p>
          </div>
          <div
            data-aos={window.innerWidth < 768 ? "fade-up" : "fade-left"}
            className={classes.card + " col-12 col-lg-3"}
          >
            <img height="100" width="200" src={trainingIMG} alt="trainings" />
            <h4>TRAINING</h4>
            <p>For the perfectionists</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home_Section2;
