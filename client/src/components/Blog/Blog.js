import React from "react";
import { Button } from "reactstrap";

import "./Blog.css";

const Blog = () => {
  return (
    <React.Fragment>
      <div className="col-12 col-lg-9 mx-auto">
        <h1 data-aos="zoom-in-up" style={{ marginTop: "120px" }}>
          Our Blog
        </h1>
        <p style={{ margin: "30px auto" }}>
          Sharing our concepts, codes and experiences.
        </p>
        <a href="https://medium.com/data-science-community-srm">
          <Button dark outline className="btn">
            Publication Link
          </Button>
        </a>
        <hr />
        <div className="col-11 mx-auto mt-5">
          <div
            data-aos="zoom-in-up"
            data-aos-duration="30000"
            id="medium-widget"
          ></div>
        </div>
        <hr />
      </div>
    </React.Fragment>
  );
};

export default Blog;
