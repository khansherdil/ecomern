import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Payment = ({ history }) => {
  const cart = useSelector((state) => state.cart);

  //totalprice lukte niet, heb qty vergeten op te slaan in redux i think?
  cart.totalPrice = cart.cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const handleRedirect = () => {
    localStorage.removeItem("cartItems");
    history.push("/end");
  };
  return (
    <div style={{ width: "1000px", marginLeft: "auto", marginRight: "auto" }}>
      <Row>
        <Col md={6}>
          <ListGroup>
            <ListGroup.Item>
              <h2>Order Details</h2>
              <p>
                Address: {cart.shippingAddress.address} -{" "}
                {cart.shippingAddress.city}
              </p>
              <p>Zipcode: {cart.shippingAddress.zipCode}</p>
              <p>Country: {cart.shippingAddress.country}</p>
              <p>City: {cart.shippingAddress.city}</p>
            </ListGroup.Item>
            <Button onClick={handleRedirect}>Complete order</Button>
          </ListGroup>
        </Col>
        <Col md={6}>
          <h1>Your basket</h1>
          {cart.cartItems.length === 0 ? (
            <p>Your basket is empty</p>
          ) : (
            <ListGroup>
              {" "}
              {cart.cartItems.map((item, index) => (
                <ListGroup.Item key={index}>
                  <img
                    style={{ width: "100%" }}
                    src={item.image}
                    alt={item.name}
                  />
                  <Link to={`/product/${item.product}`}>{item.name}</Link>
                  <p>{item.price}EUR</p>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Payment;
