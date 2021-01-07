import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../components/Loader";
import { saveShippingAddress } from "../actions/cartActions";

const OrderScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [zipCode, setZipCode] = useState(shippingAddress.city);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, zipCode, country }));
    history.push("/payment");
  };

  return (
    <>
      <h1 style={{ textAlign: "center", textDecoration: "underline" }}>
        Shipping
      </h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Address"
            value={address}
            required={true}
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
          <Form.Text className="text-muted">
            {address && address.length > 5
              ? ""
              : "Please enter a valid address"}
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="address">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="City"
            value={city}
            required={true}
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="address">
          <Form.Label>Zipcode</Form.Label>
          <Form.Control
            type="text"
            placeholder="Zipcode"
            value={zipCode}
            required={true}
            onChange={(e) => setZipCode(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="address">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Country"
            value={country}
            required={true}
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          Submit Order
        </Button>
      </Form>
    </>
  );
};

export default OrderScreen;
