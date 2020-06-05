import React, { Component } from "react";

import EventsComponent from "../../components/Events/Events";
import Footer from "../../components/Footer/Footer";

class Events extends Component {
  render() {
    return (
      <React.Fragment>
        <EventsComponent />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Events;
