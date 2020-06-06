import React, { Component } from "react";

import BlogComponent from "../../components/Blog/Blog";

class Blog extends Component {
  componentDidMount() {
    window.mediumWidget();
  }
  render() {
    return (
      <React.Fragment>
        <BlogComponent />
      </React.Fragment>
    );
  }
}

export default Blog;
