import React, { Component } from "react";

import classes from "./Home.module.css";
import Home_Section1 from "../../components/Home_Section1/Home_Section1";
import Home_Section2 from "../../components/Home_Section2/Home_Section2";
import Home_Section3 from "../../components/Home_Section3/Home_Section3";
import Home_Section4 from "../../components/Home_Section4/Home_Section4";
import Footer from "../../components/Footer/Footer";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="col-12 col-md-10 mx-auto">
          <Home_Section1 />
          <hr />
          <Home_Section2 />
          <hr />
          <Home_Section3 />
          <hr />
          <Home_Section4 />
          <hr />
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
