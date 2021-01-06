import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import { Link } from "react-router-dom";
import { Row, Col, Form, Image, ListGroup, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
const ProductScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  console.log("prods in productscreen", product);
  console.log(match.params.id);

  return (
    <div>
      <Link className="btn btn-dark my-3" to="/">
        Go back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="info" />
      ) : (
        <Row>
          <Col md={6}>
            <Image
              src={product.image}
              alt={product.name}
              height={400}
              width={300}
            />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                ></Rating>
              </ListGroup.Item>

              <ListGroup.Item>
                <strong>Price: ${product.price}</strong>
              </ListGroup.Item>
              <ListGroup.Item className="underline">
                <mark>
                  {product.availability > 0
                    ? "Seats available"
                    : "No seats available"}
                </mark>
              </ListGroup.Item>
              {product.availability > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Amount of people</Col>
                    <Form.Control
                      as="select"
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                    >
                      <option>{qty}</option>
                    </Form.Control>
                  </Row>
                </ListGroup.Item>
              )}
              <ListGroup.Item>{product.description}</ListGroup.Item>
            </ListGroup>
            <ListGroup.Item>
              <Button
                onClick={() => {
                  history.push(`/cart/${match.params.id}`);
                }}
                className="btn-dark btn-block"
                type="button"
                disabled={product.availability === 0 ? true : false}
              >
                Add to cart
              </Button>
            </ListGroup.Item>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default ProductScreen;
