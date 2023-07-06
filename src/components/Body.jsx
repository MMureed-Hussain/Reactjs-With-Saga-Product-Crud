import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Body = () => {
    
      return (
        <div className="home">
          <Container fluid>
            <Row className="hero-section">
              <Col md={6} className="hero-text">
                <h1>Discover the Power of React</h1>
                <p>
                  Create amazing web applications with React.js and Bootstrap. Take
                  your development skills to the next level.
                </p>
                <Button variant="primary">Get Started</Button>
              </Col>
              <Col md={6} className="hero-image">
                <img src="/images/hero-image.jpg" alt="Hero" />
              </Col>
            </Row>
            <Row className="features-section">
              <Col md={4}>
                <h3>Responsive Design</h3>
                <p>
                  Build responsive and mobile-friendly websites with Bootstrap's
                  grid system.
                </p>
              </Col>
              <Col md={4}>
                <h3>Component-Based Architecture</h3>
                <p>
                  Develop reusable and modular components for your React.js
                  applications.
                </p>
              </Col>
              <Col md={4}>
                <h3>Easy Integration</h3>
                <p>
                  Seamlessly integrate Bootstrap with React.js to enhance your UI
                  development workflow.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      );
    };
    
export default Body
