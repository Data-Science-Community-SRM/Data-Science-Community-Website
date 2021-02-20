import React, { Component } from "react";

import ProjectsComponent from "../../components/Projects/Projects";

class Projects extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <ProjectsComponent />
      </React.Fragment>
    );
  }
}

export default Projects;