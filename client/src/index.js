import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import App from "./App";
import NavigationItems from "./components/Shared/Navbar/NavigationItems";
import Footer from "./components/Shared/Footer/Footer";
import ThemeContextProvider from "./context/theme-context";

const Index = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <ThemeContextProvider>
          <NavigationItems />
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
