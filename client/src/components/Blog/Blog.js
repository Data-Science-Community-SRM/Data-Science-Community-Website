import React, { useEffect } from "react";
import { Button } from "reactstrap";

import "./Blog.css";

const Blog = () => {
    useEffect(() => {
        // try {
        //   var widget = document.getElementById("medium-widget");
        //   if (!!widget) {
        //     window.mediumWidget();
        //   }
        // } catch (e) {
        //   window.location.reload();
        // }
    }, []);

    return (
        <React.Fragment>
            <div className="col-12 col-lg-9 mx-auto">
                <h1 data-aos="zoom-in-up" style={{ marginTop: "120px" }}>
                    DataX
                </h1>
                <p style={{ margin: "30px auto" }}>
                    A Multidisciplinary Tech Journal sharing codes, concepts, experiences,
                    and views.
                </p>
                <a href="https://medium.com/data-science-community-srm">
                    <Button dark outline className="btnPublication">
                        Publication Link
                    </Button>
                </a>
                <hr />
                {/* <div className="col-11 mx-auto mt-5">
                    <div
                        data-aos="zoom-in-up"
                        data-aos-duration="30000"
                        id="medium-widget"
                    ></div>
                </div>
                <hr /> */}
            </div>
        </React.Fragment>
    );
};

export default Blog;
