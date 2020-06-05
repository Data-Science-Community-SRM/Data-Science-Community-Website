import React, { Component } from "react";

import PeopleComponent from "../../components/People/People";
import Footer from "../../components/Footer/Footer";

class People extends Component {
  render() {
    return (
      <React.Fragment>
        <PeopleComponent />
        <Footer />
      </React.Fragment>
    );
  }
}

export default People;
