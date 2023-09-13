import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Main = () => {
  const imageList = [
    "/images/okay.png",
    "/images/okay.png",
    "/images/okay.png",
    "/images/delivery.png",
    "/images/delivery.png",
    "/images/price.png",
  ];

  const descriptionList = [
    "Multiple Brands",
    "High Quality",
    "Return Policy",
    "Express Delivery",
    "Cash on Delivery",
    "Affordable Prices",
  ];

  return (
    <Row className='g-0'>
      {imageList.map((image, index) => (
        <Col key={index} sm={6} md={4} lg={2} className={`d-flex flex-column align-items-center ${index === 3 || index === 4 ? 'mt-4' : ''}`}>
          <div className="d-flex flex-column align-items-center">
            <img src={image} alt={`Image ${index + 1}`} className="img-fluid" width={70} />
            <h5 className='text-center'>{descriptionList[index]}</h5>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default Main;
