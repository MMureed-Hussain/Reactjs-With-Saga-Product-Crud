import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();

  const categoryList = [
    {
      id: 1,
      image: "/images/c7.webp",
      name: "Woman",
      buttonText: "Explore Now",
    },
    {
      id: 2,
      image: "/images/c3.webp",
      name: "Man",
      buttonText: "Explore Now",
    },
    {
      id: 3,
      image: "/images/c5.webp",
      name: "Sales",
      buttonText: "Explore Now",
    },
    {
      id: 4,
      image: "/images/c4.webp",
      name: "Brands",
      buttonText: "Explore Now",
    },
  ];

  const handleDetailsProduct = (categoryId) => {
    const category = categoryList.find(
      (category) => category.id === categoryId
    );
    navigate(`/categrywoman/${categoryId}`, { state: { category } });
  };

  return (  
    <>
      <div className="container mt-5">
        <h1 className="card text-center bg-success">Products Categories</h1>
        <Row className="g-4">
          {categoryList.map((category, index) => (
            <Col
              key={index}
              sm={10}
              md={8}
              lg={6}
              className="d-flex align-items-center"
            >
              <div className="card text-center position-relative">
                <img
                  src={category.image}
                  alt={`Image ${index + 1}`}
                  className="card-img-top img-fluid"
                />
                <div className="card-body">
                  <h5 className="card-title">{category.name}</h5>
                  <Button
                    variant="primary"
                    onClick={() => handleDetailsProduct(category?.id)}
                  >
                    {category.buttonText}
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Categories;
