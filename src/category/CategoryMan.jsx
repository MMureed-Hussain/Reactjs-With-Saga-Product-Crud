import R, { useState } from "react";
import { Col, Container, Row, Card, Button, Modal } from "react-bootstrap";
import { manList } from "../datalists/brandList";
export const CategoryMan = () => {
 
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleMan = (manId) => {
    const man = manList.find((man) => man.id === manId);
    setSelectedProduct(man);
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
            Man Products
          </h3>
          <Row className="g-4">
            {manList?.map((man, index) => (
              <Col key={index} md={6} lg={3}>
                <Card className="h-100">
                  <Card.Img
                    variant="top"
                    src={man.image}
                    alt={`Product ${index + 1}`}
                  />
                  <Card.Body>
                    <Card.Title>
                      {" "}
                      <b>Price : </b>
                      {man.price}
                    </Card.Title>
                    <Button variant="primary" onClick={() => handleMan(man.id)}>
                      {man.buttonText}
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
                <div className="card title">
                <b>Price : </b>{selectedProduct.price}
                </div>
                <div className="card body">
                <b>Description : </b>{selectedProduct.description}
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
