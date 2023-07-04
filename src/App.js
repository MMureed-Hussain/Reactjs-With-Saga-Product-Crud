// // import logo from './logo.svg';
// // import './App.css';
// // import 'bootstrap/dist/css/bootstrap.css';
// // import 'bootstrap/dist/js/bootstrap.js';
// // import { Route, Routes } from 'react-router-dom';
// // import Registration from './auth/Registration';
// // import Login from './auth/Login';
// // import LandingPage from './pages/LandingPage';

// // function App() {
// //   return (
// //     <div className="App">
// //     <Routes>
// //       <Route index path='/' element={<LandingPage/>}/>
// //       <Route exact path='/registration' element={<Registration/>}/>
// //       <Route exact path='/login' element={<Login/>}/>
// //     </Routes>
// //     </div>
// //   );
// // }

// // export default App;

// import React from 'react';
// import { Route, Routes, Navigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
// import Registration from './auth/Registration';
// import Login from './auth/Login';
// import LandingPage from './pages/LandingPage';
// import Dashboard from './pages/Dashboard';
// import Layout from './layout/Layout';

// const App = () => {
//   // Check if token exists in local storage
//   const token = localStorage.getItem('token');
//   console.log("token", token)
//   return (
//     <div className="App">

//       <Routes>
//         <Route
//           path="/"
//           element={<LandingPage />}
//         />
//         <Route
//           path="/registration"
//           element={<Registration />}
//         />
//         <Route
//           path="/login"
//           element={<Login />}
//         />
//       </Routes>
//       <Routes>
//         <Layout>
//           <Route
//             path="/dashboard"
//             element={token ? <Dashboard /> : <Navigate to="/" />}
//           />
//         </Layout>
//       </Routes>
//     </div>
//   );
// };

// export default App;


import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Registration from './auth/Registration';
import Login from './auth/Login';
import LandingPage from './pages/LandingPage';
import NoPage from './pages/NoPage';
import Products from './pages/Products';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

const App = () => {
  // Check if token exists in local storage
  const token = localStorage.getItem('token');

  return (
    <>
      <div className="App">
        {!token ? (
           <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/registration" element={<Registration />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/no-page" element={<NoPage />} />
            <Route path="*" element={<Navigate to="/no-page" />} />
          </Routes>
         ) : ( 
          <Layout>
            <Routes>
            <Route exact path="/" element={<Navigate to="/home" />} />
            <Route index element={<Home />} />
            <Route exact path="/products" element={<Products />} />
              <Route exact path="/no-page" element={<NoPage />} />
              <Route path="*" element={<Navigate to="/no-page" />} />
            </Routes>
          </Layout>

         )} 
      </div>
    </>
  );
};

export default App;



