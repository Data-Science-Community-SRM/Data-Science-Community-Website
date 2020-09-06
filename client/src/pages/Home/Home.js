import React, { Component } from "react";

import classes from "./Home.module.css";
import Hero from "../../components/Hero/Hero";
import Focus from "../../components/Focus/Focus";
import Domains from "../../components/Domains/Domains";
import Updates from "../../components/Updates/Updates";
import Sponsors from "../../components/Sponsors/Sponsors";

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <div className={classes.main}>
          <div className={"col-12 col-md-10 mx-auto"}>
            <section>
              <Hero />
            </section>
            <hr
              id="section02"
              style={{
                opacity: window.innerWidth > 992 ? "0" : "1",
                marginBottom: "0",
              }}
            />
            <section>
              <Focus />
            </section>
            <hr />
            <section>
              <Domains />
            </section>
            <hr />
            <section>
              <Updates />
            </section>
            <hr />
            <section>
              <Sponsors />
            </section>
            <hr />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
