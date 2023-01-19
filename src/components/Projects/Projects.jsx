import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">

      <Container>
        <h1 className="project-heading">
          My Recent <strong className="text-pink">Projects </strong>
        </h1>
        <p style={{ color: "white", textAlign: "center" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/heytonyy/media-uploads/main/set.jpg"
              title="SET"
              description="A time limited web-based card game: users have 10 mins and 81 cards to make “sets” of 3 based on properties of the card."
              ghLink="https://github.com/heytonyy/set-react"
              demoLink="http://13.52.220.59/"
              inDevelop={false}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/heytonyy/media-uploads/main/everyday.jpg"
              title="Everyday"
              description="Social media platform that enables users to  post comments, send secure private messages and at 12:00am all posts / comments are cleared… once a day, everyday!"
              ghLink="https://github.com/heytonyy/everyday"
              inDevelop={false}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/heytonyy/media-uploads/main/studentsupportsystem.jpg"
              title="Student Support System"
              description="Student database web system that allows teachers to share support notes to the student, and visible to only the teachers that support that student."
              ghLink="https://github.com/heytonyy/student-support-system"
              inDevelop={false}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/heytonyy/media-uploads/main/j-parody.png"
              title="J-Parody"
              description="A web socket based multiplayer game where users can create and join rooms to play a game of J-Parody (a parody of the popular game Jeopardy)."
              ghLink="https://github.com/heytonyy/j-parody"
              inDevelop={true}
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;