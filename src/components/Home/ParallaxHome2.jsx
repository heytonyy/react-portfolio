import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/me/me_beach.jpg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function ParallaxHome2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2em" }}>
              LET ME <span className="text-pink"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with computers in 1998 when my parents brought home an iMac and a 56kbs modem. 
              <br />
              <br />
              I am <b className="text-pink">curious</b> 🤔, <b className="text-pink">passionate</b> 🤩, <b className="text-pink">lovable</b> 🥰, and a <b className="text-pink">self-starting problem solver</b> 💡.
              <br />
              <br />
              I recently graduated from <b className="text-pink"><a href="https://www.codingdojo.com/coding-bootcamp" target="_blank" rel="noreferrer">Coding Dojo</a></b>'s Full Stack Software Development program. 
              <br />
              <br />
              I am currently looking for full-time employment.
              <br />
              I develop full stack applications in:
              <i>
                <b className="text-pink"> Python (Flask), MERN, and Java Spring Boot. </b>
              </i>
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvatar">
            <Tilt>
              <img src={myImg} className="img-fluid rounded" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="text-pink">connect </span>with me
            </p>
            <ul className="home-about-social-links">

              <li className="social-icons">
                <a
                  href="https://github.com/heytonyy"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-color home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/tonyaiello3/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-color home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default ParallaxHome2;