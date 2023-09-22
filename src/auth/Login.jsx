import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../model/actions/loginActions";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [loginUrl, setLoginUrl] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/google", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (response.status === 200) {
        const data = response.data;
        setLoginUrl(data.url);

        // Check if there's a redirect
        if (response.status === 302 && response.headers.location) {
          // Redirect to the new location
          const redirectedResponse = await axios.get(response.headers.location);
          console.log("Redirected Response:", redirectedResponse.data);
        }
      } else {
        throw new Error("Something went wrong!");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.login);
  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ formData, navigate }));
    navigate("/"); // Redirect to the home page
  };

  const handleBack = () => {};
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
          <i
            className="fa fa-arrow-circle-left"
            style={{ fontSize: "36px" }}
          ></i>
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
              <button
                onClick={() => window.open(loginUrl, "_blank")}
                className="btn btn-secondary mx-5"
              >
                Gmail
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
