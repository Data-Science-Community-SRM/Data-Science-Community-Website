import React, { Suspense, useContext, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import AOS from "aos";

import "./App.css";
import NavigationItems from "./components/NavigationItems/NavigationItems";
import Home from "./containers/Home/Home";
import Spinner from "./components/UI/Spinner/Spinner";
import NotFound from "./components/Notfound/NotFound";
import Redirecting from "./components/Redirecting/Redirecting";
import { ThemeContext } from "./context/theme-context.js";
const Events = React.lazy(() => import("./containers/Events/Events"));
const Blog = React.lazy(() => import("./containers/Blog/Blog"));
const People = React.lazy(() => import("./containers/People/People"));
const ContactUs = React.lazy(() => import("./containers/ContactUs/ContactUs"));

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

  let mediumRoutes = (
    <React.Fragment>
      <Route
        exact
        path="/Aviation"
        component={() => {
          window.location =
            "https://medium.com/data-science-community-srm/aviation-data-analytics-reading-the-skies-fed178486208";
          return <Redirecting />;
        }}
      />
      <Route
        exact
        path="/WebScraping"
        render={() => {
          window.location =
            "https://medium.com/data-science-community-srm/web-scraping-with-beautifulsoup-3d66aebadaeb";
          return <Redirecting />;
        }}
      />
      <Route
        exact
        path="/NST"
        render={() => {
          window.location =
            "https://medium.com/data-science-community-srm/neural-style-transfer-playing-with-art-a344d345f41d";
          return <Redirecting />;
        }}
      />
      <Route
        exact
        path="/guide"
        render={() => {
          window.location =
            "https://medium.com/data-science-community-srm/everything-to-know-about-bdscs-recruitment-process-5b9b34ea6f51";
          return <Redirecting />;
        }}
      />

      <Route
        exact
        path="/blogs"
        render={() => {
          window.location =
            "https://medium.com/data-science-community-srm";
          return <Redirecting />;
        }}
      />
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <NavigationItems />
      <div style={{ position: "relative", minHeight: "100vh" }}>
        {mediumRoutes}
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
            path="/blogs"
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
