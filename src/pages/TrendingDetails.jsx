import React from "react";
import { useLocation } from "react-router-dom";

const TrendingDetails = () => {
  const location = useLocation();
  const trending = location.state?.trending;
  console.warn("trending", trending);
  return (
    <>
      <div className="container mt-5">
        <h3 className="card text-center" style={{ backgroundColor: '#28a745', color: '#fff', fontFamily: "'Your Font', sans-serif" }}>Trending Product Details</h3>
        <div className="card text-center">
          <img
            src={trending.image}
            alt={trending.description}
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">{trending.description}</h5>
            <p className="card-text">
              <b className="text-fs-2">Price</b> {trending.price}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingDetails;
