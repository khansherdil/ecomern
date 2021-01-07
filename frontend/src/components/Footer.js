import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">Web 3 Webshop&copy; Ecomern.</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
