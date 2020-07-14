import React, { useState } from "react";

export const ThemeContext = React.createContext();

const ThemeContextProvider = (props) => {
  const [isDark, setIsDark] = useState(true);

  const themeToggleHandler = () => {
    setIsDark((prevState) => !prevState);
    console.log(isDark);
  };

  return (
    <ThemeContext.Provider
      value={{ isDark: isDark, toggleTheme: () => themeToggleHandler() }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
