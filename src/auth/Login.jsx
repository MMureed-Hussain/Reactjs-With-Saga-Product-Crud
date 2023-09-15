import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../model/actions/loginActions";
import { useNavigate} from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.login);
  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ formData, navigate }));
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
          <i class="fa fa-arrow-circle-left" style={{fontSize:"36px"}}></i>
        </button>
        {/* <div className="col-md-6">
        <h3
          className="card text-center mb-2"
          style={{
            backgroundColor: "#28a745",
            color: "#fff",
            fontFamily: "'Your Font', sans-serif",
          }}
        >
          Login
        </h3>
      </div> */}
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
                {loading ? "Logining..." : "Login"}
              </button>
            </form>
          </div>
          <div className="col-md-6">
            <img
              src="/images/login.jpg"
              alt="Login Image"
              className="img-fluid"
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
