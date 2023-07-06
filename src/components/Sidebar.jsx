import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const linkStyles = {
    color: "#333", // Custom color for links
    fontFamily: "Arial, sans-serif", // Custom font family
    fontSize: "16px", // Custom font size
    textDecoration: "none", // Remove underline
  };

  const hoverStyles = {
    color: "#007bff", // Change link color on hover
  };
  return (
    <>
      {/* Sidebar (Mobile View) */}
      <div className="d-md-none">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Sidebar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarMenu"
            aria-controls="sidebarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="sidebarMenu">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="products">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Sidebar (Desktop View) */}
      <div className="d-none d-md-block bg-light mt-5 vh-100">
        <img className="m-2" src="#" alt="#" />{" "}
        <a className="navbar-brand m-4" href="#">
          Sidebar
        </a>
        <div className="sidebar m-3 ">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link
                className="nav-link custom-link"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/products">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="#">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="#">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
