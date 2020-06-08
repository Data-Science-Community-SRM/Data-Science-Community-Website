import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import AOS from "aos";

import "./App.css";
import NavigationItems from "./components/NavigationItems/NavigationItems";
import Home from "./containers/Home/Home";
import Events from "./containers/Events/Events";
import Blog from "./containers/Blog/Blog";
import People from "./containers/People/People";
import ContactUs from "./containers/ContactUs/ContactUs";
import NotFound from "./components/Notfound/NotFound";

class App extends Component {
  componentWillMount() {
    AOS.init();
  }
  render() {
    let mediumRoutes = (
      <React.Fragment>
        <Route
          exact
          path="/AviationAnalytics"
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
      </React.Fragment>
    );

    return (
      <React.Fragment>
        <NavigationItems />
        <div style={{ position: "relative", minHeight: "100vh" }}>
          {mediumRoutes}
          <Switch>
            <Route path="/contact-us" exact component={ContactUs} />
            <Route path="/people" exact component={People} />
            <Route path="/blog" exact component={Blog} />
            <Route path="/events" exact component={Events} />
            <Route path="/" exact component={Home} />
            <Route path="*" exact component={NotFound} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
