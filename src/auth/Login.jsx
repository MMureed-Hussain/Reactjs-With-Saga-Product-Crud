// import React, { useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const navigate = useNavigate();
//   const { email, password } = formData;

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       const response = await axios.post("http://localhost:8000/api/login", {
//         email,
//         password,
//       });
  
//       // Save token to local storage or session storage
//       localStorage.setItem("token", response.data.access_token);
//       alert("Login successful");
//       navigate("/dashboard");
//     } catch (error) {
//       if (error.response && error.response.data && error.response.data.message) {
//         alert(error.response.data.message);
//         navigate("/login");
//       } else {
//         alert("An error occurred. Please try again later.");
//       }
//     }
//   };
  

//   return (
//     <>
//       <div className="container">
//         <div className="row">
//           <div className="col-md-6">
//             <img src="/images/login.jpg" alt="Login Image" className="img-fluid" />
//           </div>
//           <div className="col-md-6">
//             <h2>Login</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-3">
//                 <label htmlFor="email" className="form-label">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={email}
//                   onChange={handleChange}
//                   className="form-control"
//                   placeholder="Enter your email"
//                   required
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="password" className="form-label">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   id="password"
//                   name="password"
//                   value={password}
//                   onChange={handleChange}
//                   className="form-control"
//                   placeholder="Enter your password"
//                   required
//                 />
//               </div>
//               <button type="submit" className="btn btn-primary">
//                 Login
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../model/actions/loginActions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.login);
  const {email, password} = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ formData, navigate }));
  };
  

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>Login</h2>
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
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Logining...' : 'Login'}
            </button>
          </form>
        </div>
        <div className="col-md-6">
          <img
            src="/images/login.jpg"
            alt="Login Image"
            className="img-fluid"
            style={{ height: '100%', width: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;