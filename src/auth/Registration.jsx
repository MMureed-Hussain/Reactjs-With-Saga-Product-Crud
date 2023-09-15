import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../model/actions/registrationActions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.registration);
  const { name, email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({ formData, navigate }));
  };

  const handleBack = () => {
    navigate("/"); // Redirect to the home page
  };

  return (
    <>
      <div className="container">
        <button
          className="btn btn-link"
          onClick={handleBack}
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
          }}
        >
          <i class="fa fa-arrow-circle-left" style={{ fontSize: "36px" }}></i>
        </button>
        <div className="row mt-5">
          <div
            className="col-md-6"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? "Registering..." : "Register"}
              </button>
            </form>
          </div>
          <div className="col-md-6">
            <img
              src="/images/register.jpg"
              alt="Registration Image"
              className="img-fluid"
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
