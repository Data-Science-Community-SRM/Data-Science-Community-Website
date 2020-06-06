import React, { Component } from "react";

import Section1 from "../../components/Home_Section1/Home_Section1";
import Section2 from "../../components/Home_Section2/Home_Section2";
import Section3 from "../../components/Home_Section3/Home_Section3";
import Section4 from "../../components/Home_Section4/Home_Section4";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="col-12 col-md-10 mx-auto">
          <Section1 />
          <hr />
          <Section2 />
          <hr />
          <Section3 />
          <hr />
          <Section4 />
          <hr />
        </section>
      </React.Fragment>
    );
  }
}

export default Home;
