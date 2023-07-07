import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';

const Categories = () => {
  const categoryList = [
    {
      image: '/images/woman.jpg',
      name: 'Woman',
      buttonText: 'Explore Now',
    },
    {
      image: '/images/man.jpg',
      name: 'Man',
      buttonText: 'Explore Now',
    },
    {
      image: '/images/female.jpg',
      name: 'Sales',
      buttonText: 'Explore Now',
    },
    {
      image: '/images/brand.jpg',
      name: 'Brands',
      buttonText: 'Explore Now',
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center">Categories</h2>
      <Row className="g-4">
        {categoryList.map((category, index) => (
          <Col key={index} sm={10} md={8} lg={6} className="d-flex align-items-center">
            <div className="card text-center position-relative">
              <img src={category.image} alt={`Image ${index + 1}`} className="card-img-top" style={{width: "500px" , height:"400px"}} />
              <div className="card-body">
                <h5 className="card-title">{category.name}</h5>
                <Button variant="primary">{category.buttonText}</Button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Categories;
