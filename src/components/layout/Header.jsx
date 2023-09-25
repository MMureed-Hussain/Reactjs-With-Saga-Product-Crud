import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* <div className="page-header">
        <div className="container-fluid">
          <div className="d-flex align-items-center justify-content-between">
            <div className="page-title">
              <h4 className="mb-0">Analytics Dashboard</h4>
            </div>
            <Breadcrumb>
              <Breadcrumb.Item as={Link} to="/">
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item as={Link} to="/dashboards">
                Dashboards
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Analytics</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </div> */}
      <Navbar
        data-bs-theme="dark"
        style={{ backgroundColor: "#9f1094" }}
        expand="lg"
        className="mx-2"
      >
        <Container>
          <Nav
            className="me-auto"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Nav className="me-5">
              <Link className="text-light" style={{ textDecoration: "none" }}>
                <i
                  className="fa fa-clock mx-2"
                  style={{ textDecoration: "none" }}
                ></i>
                9:30am-6-30pm Mon-Sun |
              </Link>
              <Link className="text-light" style={{ textDecoration: "none" }}>
                <i className="fa fa-phone mx-2"></i>
                +9230001234567 |
              </Link>
              <Link className="text-light" style={{ textDecoration: "none" }}>
                <i className="fa-solid fa-location-dot mx-2"></i>
                DHA Lahore
              </Link>
            </Nav>
            <div className="" style={{ justifyContent: "end", }}>
              <Link to="" className="text-white me-3">
                <i className="fab fa-facebook-messenger "></i>
              </Link>
              <Link to="" className="text-white me-3">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="" className="text-white me-3">
                <i className="fa-brands fa-vimeo-v"></i>
              </Link>
              <Link to="" className="text-white me-3">
                <i className="fab fa-skype"></i>
              </Link>
              <Link to="" className="text-white me-3">
                <i className="fa-solid fa-wifi"></i>
              </Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
