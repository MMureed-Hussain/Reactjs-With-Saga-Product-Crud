// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Registration = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const navigate = useNavigate();
//   const { name, email, password } = formData;

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       const response = await axios.post("http://localhost:8000/api/register", {
//         name,
//         email,
//         password,
//       });
//       toast.success("Registration successful");
//       alert(response.data.message);
//       navigate("/login");
//       console.log(response.data);
//     } catch (error) {
//       if (error.response) {
//         // Server responded with a status code outside the range of 2xx
//         alert(error.response.data.message);
//         navigate("/");
//       } else if (error.request) {
//         // Request was made but no response received (server is off)
//         alert("Network error. Please try again later.");
//       } else {
//         // Something else happened while setting up the request
//         alert("An error occurred. Please try again later.");
//       }
      
//     }
//   };
  

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-6">
//           <h2>Registration</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label htmlFor="name" className="form-label">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={name}
//                 onChange={handleChange}
//                 className="form-control"
//                 placeholder="Enter your name"
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="email" className="form-label">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={email}
//                 onChange={handleChange}
//                 className="form-control"
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="password" className="form-label">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={password}
//                 onChange={handleChange}
//                 className="form-control"
//                 placeholder="Enter your password"
//                 required
//               />
//             </div>
//             <button type="submit" className="btn btn-primary">
//               Register
//             </button>
//           </form>
//         </div>
//         <div className="col-md-6">
//           <img
//             src="/images/register.jpg"
//             alt="Registration Image"
//             className="img-fluid"
//             style={{ height: "100%", width: "100%" }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Registration;

// Registration.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {registerUser} from '../model/actions/registrationActions'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
   name: '',
    email: '',
    password: '',
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
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>Registration</h2>
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
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Registering...' : 'Register'}
            </button>
          </form>
        </div>
        <div className="col-md-6">
          <img
            src="/images/register.jpg"
            alt="Registration Image"
            className="img-fluid"
            style={{ height: '100%', width: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Registration;
