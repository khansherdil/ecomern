import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import { listProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
const HomeScreen = () => {
  const dispatch = useDispatch();
  //display data from global state
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  console.log(`prods: `, products);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1 style={{ textAlign: `center`, fontWeight: `bold` }}>
        Book your next holiday!
      </h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger" />
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
