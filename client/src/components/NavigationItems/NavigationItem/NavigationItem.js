import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavigationItem.module.css";

const NavigationItem = (props) => {
  return (
    <NavLink
      exact
      to={props.href}
      activeClassName={classes.active}
      className={classes.links + " mx-3"}
      style={props.sty}
    >
      {props.page}
    </NavLink>
  );
};

export default NavigationItem;
