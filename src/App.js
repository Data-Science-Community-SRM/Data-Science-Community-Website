import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import NavigationItems from "./components/NavigationItems/NavigationItems";
import Home from "./containers/Home/Home";
import Events from "./containers/Events/Events";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationItems />
        <Switch>
          <Route pathname="/events" component={Events} />
          {/* <Route pathname="/" exact component={Home} /> */}
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
