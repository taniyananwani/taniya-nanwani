import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/taniya-profile.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a passionate business insights enthusiast skilled in integrating web technologies and AI-driven solutions.
              <br />
              <br />I am proficient in
              <i>
                <b className="purple"> JavaScript, TypeScript, HTML and CSS. </b>
              </i>
              <br />
              <br />
              My field of interests include building innovative &nbsp;
              <i>
                <b className="purple">AI-powered Web Applications </b> and
                creating solutions with{" "}
                <b className="purple">
                  Generative AI and Prompt Engineering.
                </b>
              </i>
              <br />
              <br />
              I develop modern web applications using <b className="purple">React.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Node.js
                </b>
              </i>
              , while integrating cutting-edge AI tools to create efficient, user-friendly, and scalable solutions.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{ borderRadius: "50%" }} />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:taniyananwaniwork@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  data-testid="email-link"
                >
                  <MdEmail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/taniyananwani"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  data-testid="linkedin-link"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/thenailshow"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  data-testid="instagram-link"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
