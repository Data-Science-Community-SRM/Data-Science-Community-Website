import React from "react";

import classes from "./Home_Section2.module.css";
import workshopIMG from "../../assets/images/workshop.svg";
import trainingIMG from "../../assets/images/training.svg";
import projectIMG from "../../assets/images/project.svg";

const Home_Section2 = () => {
  return (
    <React.Fragment>
      <div className="mx-auto">
        <div className="col-12 text-center">
          <h1>OUR FOCUS</h1>
          <h3>
            Here at Data Science Community , We make real-time projects, conduct
            researches, organize meetups, host events, and workshops primarily
            focusing on Data Science, Machine Learning, Al, Blockchain, IoT ,
            Web Development and more. We guide and teach all those who aspire to
            work in these fields and help them attain better skills and
            knowledge.
          </h3>
        </div>
        <div className="row mx-auto text-center">
          <div className="col-10 col-md-4 mx-auto">
            <h4>WORKSHOPS</h4>
            <img height="100" width="200" src={workshopIMG} />
            <p>For the enthusiasts</p>
          </div>
          <div className="col-10 col-md-4 mx-auto">
            <h4>PROJECTS</h4>
            <img height="100" width="200" src={projectIMG} />
            <p>For the effectuators</p>
          </div>
          <div className="col-10 col-md-4 mx-auto">
            <h4>TRAINING</h4> <img height="100" width="200" src={trainingIMG} />
            <p>For the perfectionists</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home_Section2;
