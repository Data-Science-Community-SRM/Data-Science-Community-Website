import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

import NavigationItem from "./NavigationItem/NavigationItem";
import logo from "../../assets/images/home-logo.png";
import "./NavigationItems.css";

const NavigationItems = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    document.querySelector("#close-icon").classList.toggle("open");
  };
  console.log();
  return (
    <div>
      <Navbar
        style={{
          backgroundColor: window.innerWidth < 768 ? "#6f389f" : "#232323",
          boxShadow: "1px 2px 10px #000000",
          width: "100vw",
          minHeight: "75px",
        }}
        dark
        fixed="top"
        expand="md"
      >
        <NavbarBrand href="/">
          {window.location.pathname === "/" ? null : (
            <img src={logo} alt="" width="50px" className="mr-3" />
          )}
        </NavbarBrand>
        <NavbarToggler onClick={toggle}>
          <div id="close-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="mt-3 mt-md-2 mb-2" onClick={toggle}>
              <NavigationItem page="Home" href="/" />
            </NavItem>
            <NavItem className="my-2" onClick={toggle}>
              <NavigationItem page="Events" href="/events" />
            </NavItem>
            <NavItem className="my-2" onClick={toggle}>
              <NavigationItem page="Blog" href="/blog" />
            </NavItem>
            <NavItem className="my-2" onClick={toggle}>
              <NavigationItem page="People" href="/people" />
            </NavItem>
            <NavItem className="my-2 mr-3" onClick={toggle}>
              <NavigationItem page="Contact Us" href="/contact-us" />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationItems;
