import React, { useState } from "react";
import { Col, Container, Row, Card, Button, Modal } from "react-bootstrap";
import { saleList } from "../datalists/brandList";

export const CategorySale = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSale = (saleId) => {
    const sale = saleList.find((sale) => sale.id === saleId);
    setSelectedProduct(sale);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };
  return (
    <>
      <div className="trending-page mt-5">
        <Container>
          <h3
            className="card text-center"
            style={{
              backgroundColor: "#28a745",
              color: "#fff",
              fontFamily: "'Your Font', sans-serif",
            }}
          >
            Sales Products
          </h3>
          <Row className="g-4">
            {saleList?.map((sale, index) => (
              <Col key={index} md={6} lg={3}>
                <Card className="h-100">
                  <Card.Img
                    variant="top"
                    src={sale.image}
                    alt={`Product ${index + 1}`}
                  />
                  <Card.Body>
                    <Card.Title>
                      <b>Price : </b>
                      {sale.price}
                    </Card.Title>
                    <Button
                      variant="primary"
                      onClick={() => handleSale(sale.id)}
                    >
                      {sale.buttonText}
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
                  <b>Description : </b>
                  {selectedProduct.description}
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
