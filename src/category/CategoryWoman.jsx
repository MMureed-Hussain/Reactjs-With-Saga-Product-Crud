import React, { useState } from "react";
import { Col, Container, Row, Card, Button, Modal } from "react-bootstrap";
import { womanList } from "../datalists/brandList";

export const CategoryWoman = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleWoman = (womanId) => {
    const woman = womanList.find((woman) => woman.id === womanId);
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
          <h3
            className="card text-center"
            style={{
              backgroundColor: "#28a745",
              color: "#fff",
              fontFamily: "'Your Font', sans-serif",
            }}
          >
            Woman Products
          </h3>
          <Row className="g-4">
            {womanList?.map((woman, index) => (
              <Col key={index} md={6} lg={3}>
                <Card className="h-100">
                  <Card.Img
                    variant="top"
                    src={woman.image}
                    alt={`Product ${index + 1}`}
                  />
                  <Card.Body>
                    <Card.Title>
                      <b>Price : </b>
                      {woman.price}
                    </Card.Title>
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
              <div className="card mt-3">
                <div className="card-title">
                  <b>Price : </b>
                  {selectedProduct.price}
                </div>
                <div className="card-body">
                  <b>Description : </b> {selectedProduct.description}
                </div>
              </div>
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
