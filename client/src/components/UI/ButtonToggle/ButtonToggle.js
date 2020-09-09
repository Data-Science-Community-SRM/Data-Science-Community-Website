import React, { useContext } from "react";

import "./ButtonToggle.css";
import { ThemeContext } from "../../../context/theme-context";

const ButtonToggle = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <>
      <div className="toggle toggle--push">
        <input
          type="checkbox"
          id="toggle--push"
          className="toggle--checkbox"
          defaultChecked={!themeContext.isDark}
          onClick={themeContext.toggleTheme}
        />
        <label
          className="toggle--btn"
          htmlFor="toggle--push"
          data-label-on="on"
          data-label-off="off"
        ></label>
      </div>
    </>
  );
};

export default ButtonToggle;
