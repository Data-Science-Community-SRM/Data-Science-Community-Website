import React, { Component } from "react";

import BlogComponent from "../../components/Blog/Blog";

class Blog extends Component {
  componentWillUnmount() {
    window.location.reload();
  }
  componentDidMount() {
    window.mediumWidget();
    window.scrollTo(0, 0);
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
