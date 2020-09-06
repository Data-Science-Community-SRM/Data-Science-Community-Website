import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavigationItem.module.css";
import { ThemeContext } from "../../../../context/theme-context";

const NavigationItem = (props) => {
  const themeContext = useContext(ThemeContext);
  return (
    <NavLink
      exact
      to={props.href}
      activeClassName={classes.active}
      className={classes.links + " mx-3"}
      style={{
        color:
          window.innerWidth < 768
            ? "#f1f1f1"
            : themeContext.isDark
            ? "#f1f1f1"
            : "#232323",
      }}
    >
      {props.page}
    </NavLink>
  );
};

export default NavigationItem;
