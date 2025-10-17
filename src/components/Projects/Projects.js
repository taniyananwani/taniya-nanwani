import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import carRental from "../../Assets/Projects/car-rental.jpg";
import aiWebsite from "../../Assets/Projects/ai-website.jpg";

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
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={carRental}
              isBlog={false}
              title="My Safe Ride"
              description="Developed a responsive car rental website utilizing HTML and CSS to provide a user-friendly interface for customers to browse, select, and book rental cars. The website features a modern design with intuitive navigation, ensuring a seamless user experience across various devices. Includes optimized performance, cross-browser compatibility, and collaborative development."
              ghLink="https://github.com/taniyananwani/my-safe-ride"
              demoLink="#"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={aiWebsite}
              isBlog={false}
              title="Kitabi Khargosh"
              description="Created a fully AI-powered website for a client using prompt engineering and no-code AI tools, eliminating the need for manual coding. Additionally, developed a custom admin panel to allow the non-technical client to easily update and manage website content. Features automated workflows, client-centered design, and iterative testing/feedback process."
              ghLink="https://github.com/taniyananwani/kitabi-khargosh"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
