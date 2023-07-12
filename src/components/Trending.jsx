import React from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Trending = () => {
const navigate = useNavigate();

  const trendingList = [
    {
      id : 1,
      image: "/images/t1.jpeg",
      price: "1",
      description: "Product Description 1",
      buttonText: "View Details",
    },
    {
      id : 2,
      image: "/images/t2.jpeg",
      price: "2",
      description: "Product Description 2",
      buttonText: "View Details",
    },
    {
      id : 3,
      image: "/images/t3.jpeg",
      price: "3",
      description: "Product Description 3",
      buttonText: "View Details",
    },
    {
      id : 4,
      image: "/images/mureed.jpg",
      price: "4",
      description: "Product Description 4",
      buttonText: "View Details",
    },
  ];

  const handleDetailsProduct = (trendingId) => {
    const trending = trendingList.find((trending) => trending.id === trendingId);
    navigate(`/trendingdetails/${trendingId}`, { state: {trending} });
  };

  return (
    <>
      <div className="trending-page mt-5">
        <Container>
        <h1 className="card text-center bg-success">Trending Products</h1>
          <Row className="g-4">
            {trendingList.map((trending, index) => (
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
                    <Button variant="primary" 
                    onClick={() => handleDetailsProduct(trending?.id)}
                    >{trending.buttonText}</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Trending;
