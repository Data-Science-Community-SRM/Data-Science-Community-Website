import React, { Suspense, useContext, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import AOS from "aos";

import "./App.css";
import Home from "./pages/Home/Home";
import Spinner from "./components/UI/Spinner/Spinner";
import NotFound from "./components/Notfound/NotFound";
import Redirecting from "./components/Redirecting/Redirecting";
import { ThemeContext } from "./context/theme-context.js";
const Events = React.lazy(() => import("./pages/Events/Events"));
const Blog = React.lazy(() => import("./pages/Blog/Blog"));
const People = React.lazy(() => import("./pages/People/People"));
const ContactUs = React.lazy(() => import("./pages/ContactUs/ContactUs"));

const App = () => {
  useEffect(() => {
    AOS.init();
  });

  const themeContext = useContext(ThemeContext);

  if (themeContext.isDark) {
    document.querySelector("body").classList.remove("lightMode");
  } else {
    document.querySelector("body").classList.add("lightMode");
  }

  let redirects = (
    <>
      <Route
        exact
        path="/blogs"
        render={() => {
          window.location = "https://medium.com/data-science-community-srm";
          return <Redirecting />;
        }}
      />
      <Route
        exact
        path="/git"
        render={() => {
          window.location =
            "https://forms.gle/8JRgXYTqLHtSJusL8";
          return <Redirecting />;
        }}
      />
      <Route
        exact
        path="/gitcommands"
        render={() => {
          window.location =
            "https://docs.google.com/document/d/1ak6Fv49L5T_JRW1kScYMdZ175hnaSNh7XQ5XOt7j_kU/edit?usp=sharing";
          return <Redirecting />;
        }}
      />
      <Route
        exact
        path="/resourceify"
        render={() => {
          window.location =
            "https://github.com/Data-Science-Community-SRM/Resourceify";
          return <Redirecting />;
        }}
      />
      <Route
        exact
        path="/conjexure"
        render={() => {
          window.location =
            "https://github.com/Data-Science-Community-SRM/Conjexure-A-Web-App-for-Stock-Market-Forecasting";
          return <Redirecting />;
        }}
      />
      <Route
        exact
        path="/rockpaperscissor"
        render={() => {
          window.location =
            "https://github.com/Data-Science-Community-SRM/Hand-Gesture-Recognition-Rock-Paper-Scissor";
          return <Redirecting />;
        }}
      />
      <Route
        exact
        path="/uselections"
        render={() => {
          window.location =
            "https://github.com/Data-Science-Community-SRM/Forecasting-US-Elections";
          return <Redirecting />;
        }}
      />
      <Route
        exact
        path="/Docgen"
        render={() => {
          window.location =
            "https://github.com/Data-Science-Community-SRM/DocGen";
          return <Redirecting />;
        }}
      />
      <Route
        exact
        path="/Handwriting-gen"
        render={() => {
          window.location =
            "https://github.com/Data-Science-Community-SRM/Handwriting-Generation";
          return <Redirecting />;
        }}
      />
    </>
  );

  return (
    <React.Fragment>
      <div style={{ position: "relative", minHeight: "100vh" }}>
        {redirects}
        <Switch>
          <Route
            path="/contact-us"
            render={() => (
              <Suspense fallback={<Spinner />}>
                <ContactUs />
              </Suspense>
            )}
          />
          <Route
            path="/people"
            render={() => (
              <Suspense fallback={<Spinner />}>
                <People />
              </Suspense>
            )}
          />
          <Route
            path="/blog"
            render={() => (
              <Suspense fallback={<Spinner />}>
                <Blog />
              </Suspense>
            )}
          />
          <Route
            path="/events"
            render={() => (
              <Suspense fallback={<Spinner />}>{<Events />}</Suspense>
            )}
          />
          <Route path="/" exact component={Home} />
          <Route
            path="*"
            render={() => (
              <Suspense fallback={<Spinner />}>
                <NotFound />
              </Suspense>
            )}
          />
        </Switch>
      </div>
    </React.Fragment>
  );
};

export default App;
