import React from "react";

// React Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// React Scroll
import { Element } from "react-scroll";

// Lottie
import LottieAnimation from "../components/Lottie";
import home from "../assets/animation/lottie.json";

// Image
import Annika from "../assets/images/Profilbilde2.jpg";

const About = (props) => {
  return (
    <>
      <Element name="about"></Element>

      <Container className="about_container">
        <div className="heading_container">
          <h1>Frontend</h1>
          <h2>Developer</h2>
        </div>
        <Row>
          {" "}
          <Col md={6}>
            <img
              className="profile_img"
              src={Annika}
              alt="Picture of me"
              title="Annika Louise Engøy"
            />
          </Col>
          <Col md={6}>
            <div className="heading_container">
              <h1>About</h1>
              <h2>me</h2>
            </div>
            <h3 className="description_text">
              Hi! I'm Annika. I'm a frontend developer located in Mosjøen,
              Norway. I love combining code with good UX/UI and great design.
            </h3>{" "}
            <p>
              My interest in coding started back in 2010 creating blog themes
              with HTML, CSS and JavaScript, but it wasn't until 2019 I decided
              to turn my hobby into a career. In March 2020 I started studying
              Frontend Development at Noroff School of Technology and Digital
              Media, and I could not be happier. <br /> <br />A year into my
              studies I got a job as a Frontend Developer in a startup company,
              creating our own products and helping various clients build their
              digital brand and identity. I then went on to work at TietoEvry as
              an Analyst at their Financial Crime Prevention Center. I'm now on
              maternity leave.
              {/* Today I have the priviledge of working as a Frontend Developer
                  in a startup company, being there every step of the way
                  building our own products and helping various clients build
                  their digital brand and identity. Here you can check out some
                  of the websites I've created. */}
            </p>{" "}
            <div className="lottie_animation">
              <LottieAnimation lotti={home} height={200} width={200} />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
