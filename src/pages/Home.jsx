import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "../components/layout/Slider";
import { Col, Row } from "react-bootstrap";
import Main from "../components/Main";
import Categories from "../components/Categories";
import Trending from "../components/Trending";

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
      <div className=" m-3"></div>
      <Main />
      <Categories />
      <Trending />
    </>
  );
};

export default Home;
