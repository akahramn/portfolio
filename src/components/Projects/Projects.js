import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/chatify.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Weather Application"
              description="This project takes the current weather data every hour and writes it in the CSV file using Apache camel dependency."
              ghLink="http://github.com/akahramn/Weather-Application"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Monitoring"
              description="The problem that has been solved provides the ability to dynamically switch between databases in the operations performedduring the application runtime. In this way, it is ensured that we can transact in different databases instantly."
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={chatify}
                isBlog={false}
                title="Attendance Face Recognition"
                description="The aim of this project is to modernize the attendance system in schools with today's developing technology. It is aimed to make the attendance system in schools more effective by using the face recognition system actively in this project."
                ghLink="https://github.com/akahramn/attendance_face_recognition"
                demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
