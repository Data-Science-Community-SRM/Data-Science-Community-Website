import React, { useContext, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import ThemeContextProvider from "./context/theme-context";
import Footer from "./components/Footer/Footer";

const Index = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
};
registerServiceWorker();
const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
