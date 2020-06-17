import React, { Component, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import AOS from "aos";

import "./App.css";
import NavigationItems from "./components/NavigationItems/NavigationItems";
import Home from "./containers/Home/Home";
import Spinner from "./components/UI/Spinner/Spinner";
const Events = React.lazy(() => import("./containers/Events/Events"));
const Blog = React.lazy(() => import("./containers/Blog/Blog"));
const People = React.lazy(() => import("./containers/People/People"));
const ContactUs = React.lazy(() => import("./containers/ContactUs/ContactUs"));
const NotFound = React.lazy(() => import("./components/Notfound/NotFound"));

class App extends Component {
  componentWillMount() {
    AOS.init();
  }
  render() {
    let mediumRoutes = (
      <React.Fragment>
        <Route
          exact
          path="/Aviation"
          component={() => {
            window.location =
              "https://medium.com/data-science-community-srm/aviation-data-analytics-reading-the-skies-fed178486208";
            return null;
          }}
        />
        <Route
          exact
          path="/WebScraping"
          render={() =>
            (window.location =
              "https://medium.com/data-science-community-srm/web-scraping-with-beautifulsoup-3d66aebadaeb")
          }
        />
        <Route
          exact
          path="/guide"
          render={() =>
            (window.location =
              "https://medium.com/data-science-community-srm/everything-to-know-about-bdscs-recruitment-process-5b9b34ea6f51")
          }
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
  }
}

export default App;
