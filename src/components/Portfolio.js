import React from "react";

// React Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// React Scroll
import { Element } from "react-scroll";

// Images
import PE2 from "../assets/images/PE2_img.png";
import SP2 from "../assets/images/SP2_img.png";
import JSF from "../assets/images/JSF_CA_img.png";

// React Icons
import { IconContext } from "react-icons";
import { FiGithub } from "react-icons/fi";

const Portfolio = (props) => {
  return (
    <>
      <Container className="portfolio_container">
        <IconContext.Provider
          value={{
            color: "white",
            size: "2em",
            className: "react_icon",
          }}
        >
          <Row className="justify-content-center">
            <Element name="portfolio"></Element>

            <h1>Portfolio</h1>
            <Col className="cards" md={4}>
              <Card>
                <Card.Img variant="top" src={PE2} />
                <Card.Body>
                  <Card.Title>Project Exam 2</Card.Title>
                  <Card.Text>
                    Project Exam 2 assignment at Noroff School of Technology and
                    Digital Media. Creating a website for a real world client.{" "}
                    <br />{" "}
                    <a className="live_link" href="https://annikaengoy.no/">
                      - Go to live site -
                    </a>
                  </Card.Text>
                  <a
                    className="git_link"
                    href="https://github.com/Annikaenjoy/project_exam2"
                  >
                    <Button className="card_btn">
                      {" "}
                      <FiGithub /> Go to GitHub repository
                    </Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col className="cards" md={4}>
              <Card>
                <Card.Img variant="top" src={SP2} />
                <Card.Body>
                  <Card.Title>Semester Project 2</Card.Title>
                  <Card.Text>
                    Semester Project 2 assignment at Noroff School of Technology
                    and Digital Media. Creating a Game of Thrones themed board
                    game fetching characters from an API.
                  </Card.Text>
                  <a
                    className="git_link"
                    href="https://github.com/Annikaenjoy/semester_project2"
                  >
                    <Button className="card_btn">
                      {" "}
                      <FiGithub /> Go to GitHub repository
                    </Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col className="cards" md={4}>
              <Card>
                <Card.Img variant="top" src={JSF} />
                <Card.Body>
                  <Card.Title>JS Frameworks CA</Card.Title>
                  <Card.Text>
                    JS Frameworks Course Assignment at Noroff School of
                    Technology and Digital Media. Usinf Strapi installation for
                    the API calls.
                  </Card.Text>
                  <a
                    className="git_link"
                    href="https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-Annikaenjoy/tree/main/js_frameworks_ca"
                  >
                    <Button className="card_btn">
                      {" "}
                      <FiGithub /> Go to GitHub repository
                    </Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </IconContext.Provider>
      </Container>
    </>
  );
};

export default Portfolio;
