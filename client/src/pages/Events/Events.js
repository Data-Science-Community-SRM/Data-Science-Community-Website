import React, { Component } from "react";

import EventsComponent from "../../components/Events/Events";

class Events extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <EventsComponent />
      </React.Fragment>
    );
  }
}

export default Events;
