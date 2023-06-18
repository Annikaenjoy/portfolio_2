import React from "react";

// React Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

// React Scroll
import { Element } from "react-scroll";

// Lottie
import LottieAnimation from "../components/Lottie";
import home from "../assets/animation/lottie.json";

// Image
import Annika from "../assets/images/Profilbilde2.jpg";

const Header = (props) => {
  return (
    <>
      <Element name="home"></Element>
      <Container className="header">
        <Row className="heading_row">
          <Col md={6} className="heading_col">
            <div className="heading_container">
              <h1 className="h1">Frontend</h1>
              <h2 className="h2"> Developer</h2>
            </div>
          </Col>
          <Col md={6}>
            <Image className="profile_img" src={Annika} roundedCircle />
          </Col>{" "}
          <div className="lottie_animation">
            <LottieAnimation lotti={home} height={200} width={200} />
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Header;
