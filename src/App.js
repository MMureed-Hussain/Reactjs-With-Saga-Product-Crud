import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
// import CategoryWoman from './pages/CategryWoman';
import { CategryWoman } from './category/CategryWoman';
import TrendingDetails from './pages/TrendingDetails';
import ProductDetails from './pages/ProductDetails';
import Categories from './components/Categories';
import Layout from './components/layout/Layout';
import Registration from './auth/Registration';
import LandingPage from './pages/LandingPage';
import Trending from './components/Trending';
import 'bootstrap/dist/css/bootstrap.css';
import Products from './pages/Products';
import 'bootstrap/dist/js/bootstrap.js';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Login from './auth/Login';
import Home from './pages/Home';

// const isAuthenticated = () => {
//   const token = localStorage.getItem('token');
//   return token !== null;
// };
// <Route exact path="/">
//   {isAuthenticated() ? <Redirect to="/home" /> : <Landing />}
// </Route>

const App = () => {
  // Check if token exists in local storage
  const token = localStorage.getItem('token');
   console.log("Toke" , token)
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
              <Route exact path="/products/:id" element={<ProductDetails />} />
              <Route exact path="/categories" element={<Categories/>} />
              <Route exact path="/categrywoman/:id" element={<CategryWoman/>} />
              <Route exact path="/trending" element={<Trending/>} />
              <Route exact path="/trendingdetails/:id" element={<TrendingDetails/>} />
              <Route exact path="/contact" element={<Contact />} />
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



