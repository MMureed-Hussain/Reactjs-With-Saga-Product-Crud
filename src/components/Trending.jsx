import React, { useState } from "react";
import { Col, Container, Row, Card, Button, Modal } from "react-bootstrap";
import {trendingList} from '../datalists/brandList'

const Trending = () => {

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleDetailsProduct = (trendingId) => {
    const trending = trendingList.find((trending) => trending.id === trendingId);
    setSelectedProduct(trending);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <div className="trending-page mt-5">
        <Container>
        <h3 className="card text-center" style={{ backgroundColor: '#28a745', color: '#fff', fontFamily: "'Your Font', sans-serif" }}>Trending Products</h3>
          <Row className="g-4">
            {trendingList?.map((trending, index) => (
              <Col key={index} md={6} lg={3}>
                <Card className="h-100">
                  <Card.Img
                    variant="top"
                    src={trending.image}
                    alt={`Product ${index + 1}`}
                  />
                  <Card.Body>
                    <Card.Title>{trending.price}</Card.Title>
                    <Card.Text>{trending.description}</Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => handleDetailsProduct(trending.id)}
                    >
                      {trending.buttonText}
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

export default Trending;

