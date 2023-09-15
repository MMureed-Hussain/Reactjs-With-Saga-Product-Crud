import React, { useState } from "react";
import { Col, Container, Row, Card, Button, Modal } from "react-bootstrap";

export const CategoryWoman = () => {
  const womanList = [
    {
      id: 1,
      image: "/images/t1.jpeg",
      price: "1",
      description: "Product Description 1",
      buttonText: "View Details",
    },
    {
      id: 2,
      image: "/images/t2.jpeg",
      price: "2",
      description: "Product Description 2",
      buttonText: "View Details",
    },
    {
      id: 3,
      image: "/images/t3.jpeg",
      price: "3",
      description: "Product Description 3",
      buttonText: "View Details",
    },
    {
      id: 4,
      image: "/images/mureed.jpg",
      price: "4",
      description: "Product Description 4",
      buttonText: "View Details",
    },
    {
      id: 5,
      image: "/images/t1.jpeg",
      price: "1",
      description: "Product Description 1",
      buttonText: "View Details",
    },
    {
      id: 6,
      image: "/images/t2.jpeg",
      price: "2",
      description: "Product Description 2",
      buttonText: "View Details",
    },
    {
      id: 7,
      image: "/images/t3.jpeg",
      price: "3",
      description: "Product Description 3",
      buttonText: "View Details",
    },
    {
      id: 8,
      image: "/images/mureed.jpg",
      price: "4",
      description: "Product Description 4",
      buttonText: "View Details",
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleWoman = (womanId) => {
    const woman = womanList.find(
      (woman) => woman.id === womanId
    );
    setSelectedProduct(woman);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };
  return (
    <>
      <div className="trending-page mt-5">
        <Container>
          {/* <h1 className="card text-center bg-success">Woman Products</h1> */}
          <h3 className="card text-center" style={{ backgroundColor: '#28a745', color: '#fff', fontFamily: "'Your Font', sans-serif" }}>Woman Products</h3>
          <Row className="g-4">
            {womanList.map((woman, index) => (
              <Col key={index} md={6} lg={3}>
                <Card className="h-100">
                  <Card.Img
                    variant="top"
                    src={woman.image}
                    alt={`Product ${index + 1}`}
                  />
                  <Card.Body>
                    <Card.Title>{woman.price}</Card.Title>
                    <Card.Text>{woman.description}</Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => handleWoman(woman.id)}
                    >
                      {woman.buttonText}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Modal to display the selected product */}
      <Modal show={!!selectedProduct} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct && (
            <div>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.description}
                className="img-fluid"
              />
              <p>Price: {selectedProduct.price}</p>
              <p>Description: {selectedProduct.description}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
