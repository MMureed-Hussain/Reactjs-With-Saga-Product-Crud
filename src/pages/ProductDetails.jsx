import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductRequest } from "../model/actions/productDetailsAction";
import { useParams } from "react-router-dom";
import { Card, Grid, Row, Col, Spinner } from "react-bootstrap";

// import { fetchProductRequest } from "../actions/productActions";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const id = useParams();
  const { loading, error, product } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProductRequest(id));
  }, [dispatch, id]);

  return (
    <>
      <div className=" d-flex align-items-center justify-content-center vh-100 m-2 bg-success"> 
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : product ? (
          <div className="card width:25rem">
           <b>Name</b>{" "}<div className="card-body text-primary" >{product.name}</div>{" "}
            <b>Price</b>{" "}<div className="card-body text-primary">{product.price}</div>
            {/* Render other details */}
          </div>
        ) : (
          <p>No product data available.</p>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
