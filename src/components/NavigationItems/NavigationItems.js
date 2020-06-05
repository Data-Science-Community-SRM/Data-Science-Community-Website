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

const NavigationItems = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        style={{
          backgroundColor: "#232323",
          boxShadow: "1px 2px 10px #000000",
          height: "70px",
        }}
        dark
        fixed="top"
        expand="md"
      >
        <NavbarBrand href="/">
          <img src={logo} alt="" width="50px" className="mr-3" />
          DSCommunity
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavigationItem page="Home" href="/" />
            </NavItem>
            <NavItem>
              <NavigationItem page="Events" href="/events" />
            </NavItem>
            <NavItem>
              <NavigationItem page="Blog" href="/blog" />
            </NavItem>
            <NavItem>
              <NavigationItem page="People" href="/people" />
            </NavItem>
            <NavItem>
              <NavigationItem page="Contact Us" href="/contact-us" />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationItems;
