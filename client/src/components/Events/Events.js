import React from "react";
import { Jumbotron, Button } from "reactstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import classes from "./Events.module.css";
import comingSoonIMG from "../../assets/images/coming-soon.png";
import Rlogo from "../../assets/images/Rlogo.png";
import Carousel from "../Carousel/Carousel";

const Events = () => {
  return (
    <React.Fragment>
      <div className="col-12 col-lg-9 mx-auto">
        <h1 data-aos="zoom-in-up" style={{ marginTop: "120px" }}>
          Events
        </h1>
        <div className="row">
          <Jumbotron
            data-aos="fade-left"
            className={classes.jumbotron + " col-11 col-lg-5 mx-auto"}
          >
            <div className="text-center">
              <img src={Rlogo} alt="Rlogo" width="60%" />
            </div>
            <h1 className="display-3">Data Science with R Programming 101</h1>
            <hr className="my-2" />
            <p className="text-center">
              Focused on the most important tool of a Data Scientist, this
              workshop explored various statistical models, visualizations and
              ML packages utilizing R.
            </p>
            <div className="row">
              <div className="mx-auto col-8">
                <Button
                  className={classes.certBTN + " col-12"}
                  onClick={() =>
                    alert(
                      "Certificates for Data Science with R Programming' have been mailed to all the attendees."
                    )
                  }
                >
                  Certificates
                </Button>
              </div>
              <div className="mx-auto col-8">
                <Button
                  className={classes.galleryBTN + " col-12"}
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/drive/folders/1HSl_hKY56Gpil33SBdh3aFAsWtv7nbEs"
                    )
                  }
                >
                  Gallery
                </Button>
              </div>
            </div>
          </Jumbotron>
          <Jumbotron
            data-aos="fade-right"
            className={classes.jumbotron + " col-11 col-lg-5 mx-auto"}
          >
            <div className="text-center">
              <img src={comingSoonIMG} alt="coming-soon" width="80%" />
            </div>
            <h1 className="display-3">Something is Cooking Up !</h1>
            <hr className="my-2" />
            <p className="text-center">
              Our team is working continuously to conduct more exciting
              workshops. Follow our Instagram handle and subscribe to our
              notifications to stay updated.
            </p>
            <div className="row">
              <div className="mx-auto col-8">
                <Button
                  className={classes.instaBTN + " col-12"}
                  onClick={() =>
                    window.open("https://www.instagram.com/dscommunity_srm/")
                  }
                >
                  Our Instagram
                </Button>
              </div>
            </div>
          </Jumbotron>
        </div>
        <div className="mt-5">
          <Carousel />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Events;
