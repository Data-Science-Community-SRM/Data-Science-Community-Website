import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import NavigationItems from "./components/NavigationItems/NavigationItems";
import Footer from "./components/Footer/Footer";
import Home from "./containers/Home/Home";
import Events from "./containers/Events/Events";
import Blog from "./containers/Blog/Blog";
import People from "./containers/People/People";
import ContactUs from "./containers/ContactUs/ContactUs";
import NorFound from "./components/Notfound/NotFound";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationItems />
        <Switch>
          <Route path="/contact-us" exact component={ContactUs} />
          <Route path="/people" exact component={People} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/events" exact component={Events} />
          <Route path="/" exact component={Home} />
          <Route path="*" exact component={NorFound} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
