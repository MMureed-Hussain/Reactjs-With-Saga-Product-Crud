import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const [isLoggedin, setIsLoggedin] = useState(false);
  const logout = (e) => {
    e.preventDefault();
    console.log("Logout");
    // CLEAR DATA FROM STORAGE
    localStorage.clear();
    sessionStorage.clear();
    setIsLoggedin(false);
    navigate("/login");
  };


  return (
    <>
      {/* Sidebar (Mobile View) */}
      <div className="d-md-none">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            <i className=" fas fa-user mx-4"></i>
          </Link>
          <button
            className="navbar-toggler mx-1"
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
                <Link className="nav-link " to="/">
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
                  Category
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
              <li className="nav-item">
                <Link className="nav-link" to="#" onClickCapture={logout}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* Sidebar (Desktop View) */}
      <div className="d-none d-md-block bg-light mt-5 vh-100 fs-5">
        {/* <img className="m-2" src="#" alt="D" />{" "} */}
        <i className="fas fa-user m-2"></i>{" "}
        <Link className="navbar-brand m-4" to="/">
          <span className="fs-2">Logo</span>
        </Link>
        <div className="sidebar">
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
                Category
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
            <li className="nav-item">
              <Link className="nav-link" to="#" onClickCapture={logout}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
