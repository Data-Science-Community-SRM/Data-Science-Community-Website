import React from "react";

import logo from "../../assets/images/home-logo.png";

const Footer = () => {
  return (
    <React.Fragment>
      <footer>
        <div className="row col-12">
          <div className="col-6 col-md-3 text-center">
            <img src={logo} alt="" width="100px" />
          </div>
          <div className="col-6 col-md-3 text-left text-md-right">
            <ul>
              <li>HOME</li>
              <li>EVENTS</li>
              <li>BLOG</li>
              <li>PEOPLE</li>
              <li>CONTACT US</li>
            </ul>
          </div>
          <div className="col-6 col-md-3 text-right text-md-left">
            <ul>
              <li>Reach Us</li>
              <li>Avirup Chattaraj</li>
              <li>Hritik Bhandari</li>
            </ul>
          </div>
          <div className="col-6 col-md-3 text-center">
            <img src={logo} alt="" width="100px" />
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
