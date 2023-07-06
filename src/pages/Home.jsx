import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "../components/layout/Slider";
import Body from "../components/Body";
import { Col, Row } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Row className="d-flex align-items-stretch g-0">
        <Col md={8}>
          <Slider />
        </Col>
        <Col md={4} className="d-flex flex-column">
          <div className="flex-grow-1">
            <Slider />
          </div>
        </Col>
      </Row>
      <div className=" m-3">
      </div>
      <Body />

    </>
  );
};

export default Home;
