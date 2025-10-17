import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiTypescript,
  SiOpenai,
} from "react-icons/si";
import { BiBrain } from "react-icons/bi";
import { MdAutoAwesome } from "react-icons/md";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{ fontSize: "14px", marginTop: "10px" }}>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <p style={{ fontSize: "14px", marginTop: "10px" }}>TypeScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={{ fontSize: "14px", marginTop: "10px" }}>React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={{ fontSize: "14px", marginTop: "10px" }}>Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <p style={{ fontSize: "14px", marginTop: "10px" }}>HTML5</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <p style={{ fontSize: "14px", marginTop: "10px" }}>CSS3</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpenai />
        <p style={{ fontSize: "14px", marginTop: "10px" }}>Generative AI</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdAutoAwesome />
        <p style={{ fontSize: "14px", marginTop: "10px" }}>Prompt Engineering</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiBrain />
        <p style={{ fontSize: "14px", marginTop: "10px" }}>AI Integration</p>
      </Col>
    </Row>
  );
}

export default Techstack;
