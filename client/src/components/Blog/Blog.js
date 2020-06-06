import React from "react";
import { Button } from "reactstrap";

import "./Blog.css";

const Blog = () => {
  return (
    <React.Fragment>
      <div className="col-12 col-lg-9 mx-auto">
        <h1>Our Blog</h1>
        <p style={{ margin: "30px auto" }}>
          Sharing our concepts, codes and experiences.
        </p>
        <a href="https://medium.com/data-science-community-srm">
          <Button
            color="secondary"
            dark
            outline
            style={{
              borderRadius: "50px",
              borderColor: "#fafafa",
              color: "#fafafa",
              padding: "10px 30px",
              margin: "10px auto",
              fontWeight: "400",
            }}
          >
            Publication Link
          </Button>
        </a>
        <div className="col-11 mx-auto mt-5">
          <div id="medium-widget"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Blog;
