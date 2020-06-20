import React from "react";
import { Carousel } from "react-responsive-carousel";

import first from "../../assets/images/carousel/1.JPG";
import second from "../../assets/images/carousel/2.JPG";
import third from "../../assets/images/carousel/3.JPG";
import fourth from "../../assets/images/carousel/4.JPG";
import "./Carousel.css";

const CarouselEvents = () => {
  return (
    <Carousel autoPlay showArrows={true}>
      <div>
        <img src={first} alt="first" />
        <p
          className="legend d-none d-sm-block"
          style={{
            backgroundColor: "#232323",
            fontWeight: "400",
            textTransform: "uppercase",
            fontSize: "12px",
          }}
        >
          Data Science with R Programming 101! <br />
          <span
            className="text-muted"
            style={{ fontWeight: "700", fontSize: "10px" }}
          >
            21ST FEBRUARY, 2020
          </span>
        </p>
      </div>

      <div>
        <img src={second} alt="second" />
        <p
          className="legend d-none d-sm-block"
          style={{
            backgroundColor: "#232323",
            fontWeight: "400",
            textTransform: "uppercase",
            fontSize: "12px",
          }}
        >
          Data Science with R Programming 101! <br />
          <span
            className="text-muted"
            style={{ fontWeight: "700", fontSize: "10px" }}
          >
            21ST FEBRUARY, 2020
          </span>
        </p>
      </div>

      <div>
        <img src={third} alt="third" />
        <p
          className="legend d-none d-sm-block"
          style={{
            backgroundColor: "#232323",
            fontWeight: "400",
            textTransform: "uppercase",
            fontSize: "12px",
          }}
        >
          Data Science with R Programming 101! <br />
          <span
            className="text-muted"
            style={{ fontWeight: "700", fontSize: "10px" }}
          >
            21ST FEBRUARY, 2020
          </span>
        </p>
      </div>

      <div>
        <img src={fourth} alt="fourth" />
        <p
          className="legend d-none d-sm-block"
          style={{
            backgroundColor: "#232323",
            fontWeight: "400",
            textTransform: "uppercase",
            fontSize: "12px",
          }}
        >
          Data Science with R Programming 101! <br />
          <span
            className="text-muted"
            style={{ fontWeight: "700", fontSize: "10px" }}
          >
            21ST FEBRUARY, 2020
          </span>
        </p>
      </div>
    </Carousel>
  );
};

export default CarouselEvents;
