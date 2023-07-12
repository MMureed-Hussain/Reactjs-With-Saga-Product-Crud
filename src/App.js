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
import ProductDetails from './pages/ProductDetails';
import Contact from './pages/Contact';
import Trending from './components/Trending';
import Categories from './components/Categories';
import TrendingDetails from './pages/TrendingDetails';
import CategoriesDetails from './pages/CategoriesDetails';

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
              <Route exact path="/categoriesdetails/:id" element={<CategoriesDetails/>} />
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



