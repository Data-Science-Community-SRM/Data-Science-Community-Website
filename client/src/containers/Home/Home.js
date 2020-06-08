import React, { Component } from "react";

import Section1 from "../../components/Home_Section1/Home_Section1";
import Section2 from "../../components/Home_Section2/Home_Section2";
import Section3 from "../../components/Home_Section3/Home_Section3";
import Section4 from "../../components/Home_Section4/Home_Section4";

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <div className="col-12 col-md-10 mx-auto">
          <section>
            <Section1 />
          </section>
          <hr
            id="section02"
            style={{
              opacity: window.innerWidth > 992 ? "0" : "1",
              marginBottom: "0",
            }}
          />
          <section>
            <Section2 />
          </section>
          <hr />
          <section>
            <Section3 />
          </section>
          <hr />
          <section>
            <Section4 />
          </section>
          <hr />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
