import React, { Component } from "react";

import homeSection1 from "../../components/Home_Section1/Home_Section1";
import homeSection2 from "../../components/Home_Section2/Home_Section2";
import homeSection3 from "../../components/Home_Section3/Home_Section3";
import homeSection4 from "../../components/Home_Section4/Home_Section4";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="col-12 col-md-10 mx-auto">
          <homeSection1 />
          <hr />
          <homeSection2 />
          <hr />
          <homeSection3 />
          <hr />
          <homeSection4 />
          <hr />
        </section>
      </React.Fragment>
    );
  }
}

export default Home;
