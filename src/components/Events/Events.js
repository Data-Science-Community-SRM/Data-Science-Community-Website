import React from "react";
import { Jumbotron, Button } from "reactstrap";

import comingSoonIMG from "../../assets/images/coming-soon.png";
import Rlogo from "../../assets/images/Rlogo.png";

const Events = () => {
  return (
    <React.Fragment>
      <div className="row">
        <Jumbotron className="col-11 col-lg-5 mx-auto">
          <div className="text-center">
            <img src={Rlogo} alt="" width="60%" />
          </div>
          <h1 className="display-3">Data Science with R Programming 101</h1>
          <p className="lead">
            This is a simple hero unit, a simple Jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-2" />
          <p>
            Focused on the most important tool of a Data Scientist, this
            workshop explored various statistical models, visualizations and ML
            packages utilizing R.
          </p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
        </Jumbotron>
        <Jumbotron className="col-11 col-lg-5 mx-auto">
          <div className="text-center">
            <img src={comingSoonIMG} alt="" width="80%" />
          </div>
          <h1 className="display-3">Something is cooking up !</h1>
          <p className="lead">
            Our team is working continuously to conduct more exciting workshops.
            Follow our Instagram handle and subscribe to our notifications to
            stay updated.
          </p>
          <hr className="my-2" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
        </Jumbotron>
      </div>
    </React.Fragment>
  );
};

export default Events;
