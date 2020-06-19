import React, { Component, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import AOS from "aos";

import "./App.css";
import NavigationItems from "./components/NavigationItems/NavigationItems";
import Home from "./containers/Home/Home";
import Spinner from "./components/UI/Spinner/Spinner";
import NotFound from "./components/Notfound/NotFound";
import Redirecting from "./components/Redirecting/Redirecting";
const Events = React.lazy(() => import("./containers/Events/Events"));
const Blog = React.lazy(() => import("./containers/Blog/Blog"));
const People = React.lazy(() => import("./containers/People/People"));
const ContactUs = React.lazy(() => import("./containers/ContactUs/ContactUs"));
const Recruitments = React.lazy(() =>
  import("./components/Recruitments/Recruitments")
);

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
          path="/guide"
          render={() => {
            window.location =
              "https://medium.com/data-science-community-srm/everything-to-know-about-bdscs-recruitment-process-5b9b34ea6f51";
            return <Redirecting />;
          }}
        />
      </React.Fragment>
    );

    return (
      <React.Fragment>
        <NavigationItems />
        <div style={{ position: "relative", minHeight: "100%" }}>
          {mediumRoutes}
          <Switch>
            <Route
              path="/apply"
              render={() => (
                <Suspense fallback={<Spinner />}>
                  <Recruitments />
                </Suspense>
              )}
            />
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
