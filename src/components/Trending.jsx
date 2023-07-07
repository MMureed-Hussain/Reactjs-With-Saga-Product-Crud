import React from 'react';
import { Col, Container, Row, Card, Button } from 'react-bootstrap';

const Trending = () => {
  const trendingList = [
    {
      image: '/images/t1.jpeg',
      price: '1',
      description: 'Product Description 1',
      buttonText: 'View Details',
    },
    {
      image: '/images/t2.jpeg',
      price: '2',
      description: 'Product Description 2',
      buttonText: 'View Details',
    },
    {
      image: '/images/t3.jpeg',
      price: '3',
      description: 'Product Description 3',
      buttonText: 'View Details',
    },
    {
      image: '/images/mureed.jpg',
      price: '4',
      description: 'Product Description 4',
      buttonText: 'View Details',
    },
  ];

  return (
    <div className="trending-page">
      <Container>
        <h2 className="text-center">Trending Products</h2>
        <Row className="g-4">
          {trendingList.map((product, index) => (
            <Col key={index} md={6} lg={3}>
              <Card className="h-100">
                <Card.Img variant="top" src={product.image} alt={`Product ${index + 1}`} />
                <Card.Body>
                  <Card.Title>{product.price}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Button variant="primary">{product.buttonText}</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Trending;
