import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import { BrowserRouter } from "react-router-dom";
import ThemeContext, { isDark } from "./context";

import Footer from "./components/Footer/Footer";

function Index() {
  const [theme, setTheme] = useState(isDark.true);

  const toggleTheme = () =>
    theme === isDark.true ? setTheme(isDark.false) : setTheme(isDark.true);

  return (
    <React.Fragment>
      <BrowserRouter>
        <ThemeContext.Provider value={theme}>
          <button onClick={toggleTheme}>CHANGE THEME</button>
          <App />
        </ThemeContext.Provider>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}
registerServiceWorker();
const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
