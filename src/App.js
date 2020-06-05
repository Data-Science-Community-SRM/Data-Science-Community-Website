import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import NavigationItems from "./components/NavigationItems/NavigationItems";
import Home from "./containers/Home/Home";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationItems />
        <Switch>
          <Route pathname="/" component={Home} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
