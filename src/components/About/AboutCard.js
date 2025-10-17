import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Taniya Nanwani </span>
            from <span className="purple"> India.</span>
            <br />
            I am currently working as a Web AI Developer at TechRooot Technology.
            <br />
            I am pursuing B.Tech in Computer Science from LNCT Group of College.
            <br />
            <br />
            I'm a business insights enthusiast skilled in integrating web technologies, AI-driven solutions, and full-stack development with a deep understanding of modern business thinking. I have proven ability to analyze market trends and develop scalable digital solutions that drive business growth. I'm actively engaged in AI conferences and industry events, continuously learning and applying emerging technologies in real-world solutions.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Attending AI Conferences
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Generative AI Tools
            </li>
            <li className="about-activity">
              <ImPointRight /> Business Strategy & Market Analysis
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Taniya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
