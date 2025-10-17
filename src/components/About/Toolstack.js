import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
} from "react-icons/si";
import { FaTools } from "react-icons/fa";
import { MdAnalytics } from "react-icons/md";
import { BsRobot } from "react-icons/bs";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p style={{ fontSize: "14px", marginTop: "10px" }}>VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p style={{ fontSize: "14px", marginTop: "10px" }}>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsRobot />
        <p style={{ fontSize: "14px", marginTop: "10px" }}>AI Tools</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdAnalytics />
        <p style={{ fontSize: "14px", marginTop: "10px" }}>Data Analytics</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaTools />
        <p style={{ fontSize: "14px", marginTop: "10px" }}>No-Code Tools</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
