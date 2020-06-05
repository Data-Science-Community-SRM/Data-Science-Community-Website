import React from "react";

import classes from "./Home_Section4.module.css";
import updatesIMG from "../../assets/images/updates.svg";

const Home_Section2 = () => {
  return (
    <React.Fragment>
      <div className={classes.main + " row mx-auto"}>
        <div className="col-12 col-lg-5 d-none d-lg-block">
          <img src={updatesIMG} alt="" width="90%" />
        </div>
        <div className="col-12 col-lg-7 text-center">
          <h1>
            <span style={{ color: "#6F389F" }}>U</span>PDATES.
          </h1>
          <p>
            Our members are contributing continuously to the development side by
            conducting precise analytics, deploying high performance cutting
            edge models and churning out high quality projects. We are also
            actively conducting workshops and events throughout the semester.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home_Section2;
