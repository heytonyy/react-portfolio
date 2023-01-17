import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone ☺️, my name is <span className="purple"> Tony Aiello </span>
            and I currently live in <span className="purple"> Los Angeles, California.</span>
            <br />
            I previously was a high school math/computer science teacher who decided to pursue a career in software development.
            <br />
            <br />
            Apart from coding, some other activities that like to do are:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Taking care of my cats
            </li>
            <li className="about-activity">
              <ImPointRight /> Going to Museums
            </li>
            <li className="about-activity">
              <ImPointRight /> Enjoying the outdoors
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
