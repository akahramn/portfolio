import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{textAlign: "justify"}}>
            Hi Everyone, I am <span className="purple">Abdullah Kahraman </span>.
            <br/>
            <br/>
            Dedicated Backend Engineer with 2 years of experience in designing and developing robust, scalable
            <span className="purple"> Java</span> applications.
            <br/>
            Proficient in <span className="purple"> Spring Boot</span>, <span className="purple"> Spring MVC</span>,
            and <span className="purple"> Hibernate</span>, I have a proven
            track record of delivering high-quality software solutions.
            <br/>
            My expertise lies in building <span className="purple"> RESTful APIs</span>, <span
              className="purple"> microservices</span>,
            and integrating with various databases.
            <br/>
            Passionate about <span className="purple"> clean code</span>, best practices, and continuous
            improvement, I thrive in fast-paced environments and enjoy collaborating with cross-functional teams.
            <br/>
            <br/>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing tennis.
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
