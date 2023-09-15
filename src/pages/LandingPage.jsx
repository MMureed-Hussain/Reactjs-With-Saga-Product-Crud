import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <Link to="/" className="navbar-brand">
                Home
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/registration" className="nav-link">
                      Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="col-md-6 mt-5 text-center">
            <h2>Welcome to Our Project</h2>
            <p>Project details and information go here.</p>
          </div>
          <div className="col-md-6 mt-5 mb-5">
            <img
              src="/images/landing-page.jpg"
              alt="Landing Image"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
