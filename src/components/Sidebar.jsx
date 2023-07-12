import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      {/* Sidebar (Mobile View) */}
      <div className="d-md-none">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            <span className="fs-2">Logo</span>
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
                <Link className="nav-link custom-link" to="/categories">
                  Categories
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link custom-link" to="/trending">
                  Trending
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Sidebar (Desktop View) */}

      <div className="d-none d-md-block bg-light mt-5 vh-100">
        <img className="m-2" src="#" alt="#" />{" "}
        <a className="navbar-brand m-4" href="#">
          <span className="fs-2">Logo</span>
        </a>
        <div className="sidebar m-3 ">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/products">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/categories">
                Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/trending">
                Trending
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="contact">
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
