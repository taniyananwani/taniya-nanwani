import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Taniya Nanwani</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} TN</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="mailto:taniyananwaniwork@gmail.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                data-testid="footer-email-link"
              >
                <MdEmail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/taniyananwani"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                data-testid="footer-linkedin-link"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/nanwani_taniya"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                data-testid="footer-instagram-link"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
