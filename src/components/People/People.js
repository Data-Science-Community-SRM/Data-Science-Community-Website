import React from "react";

import classes from "./People.module.css";

const People = (props) => {
  return (
    <React.Fragment>
      <div className={classes.members}>
        <img
          className={classes.photo}
          src={require(`../../assets/images/team/${props.image}.jpg`)}
        />
        <br />
        <div className={classes.name}>
          {props.fname}
          <br />
          {props.lname}
        </div>
        <br />
        <div className={classes.role}>{props.role}</div>
        <div className={classes.links}>
          <a href={`https://github.com/${props.github}`}>
            <p className="fab fa-github">git</p>
          </a>
          <a href={`"https://linkedin.com/in/${props.linkedin}"`}>
            <p className="fab fa-linkedin">lin</p>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default People;
