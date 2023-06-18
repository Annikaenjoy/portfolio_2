import React from "react";

import { Link } from "react-scroll";

// React Bootstrap
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// Logo
import Logo from "../assets/images/Logo-a1.png";

const NavBar = () => {
  return (
    <>
      <Navbar
        fixed="top"
        className="navbar"
        bg="background"
        variant="dark"
        expand="lg"
      >
        <Navbar.Brand href="/">
          <img className="logo" src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-position ml-auto">
            <Link
              className="nav_link"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
            <Link
              className="nav_link"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
            <Link
              className="nav_link"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Portfolio
            </Link>
            <Link
              className="nav_link"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
