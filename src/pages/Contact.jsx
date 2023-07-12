import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Contact = () => {
  const phoneNumber = '+923041742761'; // Replace with your WhatsApp phone number

  const openWhatsAppChat = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <Container>
    <Row>
      <Col className=' text-center m-5'>
        <h1 className='fs-4'>Contact Us</h1>
        <p className='m-3 p-3'>
          For any inquiries or assistance related to buying clothes, please feel free to reach out to us via WhatsApp.
          Our team is here to help you find the perfect outfits and answer any questions you may have.
        </p>
        <p className='m-3 p-3'>Our contact hours are Monday to Friday, 9:00 AM to 5:00 PM.</p>
        <p>Feel free to send us a message and we'll get back to you as soon as possible.</p>
        <Button className='p-3 m-3 fs-3 ' onClick={openWhatsAppChat} variant="success">
          Contact via WhatsApp
        </Button>
      </Col>
    </Row>
  </Container>
  
  );
};

export default Contact;
