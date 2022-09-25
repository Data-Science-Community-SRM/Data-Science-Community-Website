import React from "react";
import { Carousel } from "react-responsive-carousel";

import first from "../../../assets/images/carousel/1.JPG";
import second from "../../../assets/images/carousel/2.JPG";
import third from "../../../assets/images/carousel/3.JPG";
import fourth from "../../../assets/images/carousel/4.JPG";
import dshack1 from "../../../assets/images/carousel/dshack1.jpg";
import dshack2 from "../../../assets/images/carousel/dshack2.jpg";
import dshack3 from "../../../assets/images/carousel/dshack3.jpg";


import "./Carousel.css";

const CarouselEvents = () => {
    return (
        <Carousel autoPlay showArrows={true}>
            <div>
                <img src={dshack1} alt="dshack1" />
                <p
                    className="legend d-none d-sm-block"
                    style={{
                        backgroundColor: "#232323",
                        fontWeight: "400",
                        textTransform: "uppercase",
                        fontSize: "12px",
                    }}
                >
                    Data Science Hack 2022 <br />
                    <span
                        className="text-muted"
                        style={{ fontWeight: "700", fontSize: "10px" }}
                    >
                        3RD SEPTEMBER, 2022
                    </span>
                </p>
            </div>

            <div>
                <img src={dshack2} alt="dshack2" />
                <p
                    className="legend d-none d-sm-block"
                    style={{
                        backgroundColor: "#232323",
                        fontWeight: "400",
                        textTransform: "uppercase",
                        fontSize: "12px",
                    }}
                >
                    Data Science Hack 2022 <br />
                    <span
                        className="text-muted"
                        style={{ fontWeight: "700", fontSize: "10px" }}
                    >
                        3RD SEPTEMBER, 2022
                    </span>
                </p>
            </div>
            <div>
                <img src={dshack3} alt="dshack3" />
                <p
                    className="legend d-none d-sm-block"
                    style={{
                        backgroundColor: "#232323",
                        fontWeight: "400",
                        textTransform: "uppercase",
                        fontSize: "12px",
                    }}
                >
                    Data Science Hack 2022 <br />
                    <span
                        className="text-muted"
                        style={{ fontWeight: "700", fontSize: "10px" }}
                    >
                        3RD SEPTEMBER, 2022
                    </span>
                </p>
            </div>
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
