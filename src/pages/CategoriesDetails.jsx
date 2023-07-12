import React from "react";
import { useLocation } from "react-router-dom";

const CategoriesDetails = () => {
    const location = useLocation();
    const category = location.state?.category;
    console.warn("category",category);

  return (
    <>
      <div className="container mt-5">
      <h1 className="card text-center bg-success">Categories Product Details</h1>
        <div className="card text-center">
          <img
            src={category.image}
            alt={category.name}
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">{category.name}</h5>
            <p className="card-text">
              Other details about the category can go here...
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesDetails;
