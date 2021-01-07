import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, ListGroup, Image, Button, Card } from "react-bootstrap";
import { addToCart, removeFromCart } from "../actions/cartActions";

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id;
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log(cartItems);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId));
    }
  }, [dispatch, productId]);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    history.push("/order");
  };
  return (
    <Row>
      <Col md={12}>
        <h1 style={{ textAlign: "center" }}>Shopping cart</h1>
        {cartItems.length === 0 ? (
          <h2>
            Your cart is empty. <Link to="/">Go back shopping</Link>
          </h2>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              //ITEM.PRODUCT IS THE ID
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={3}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      fluid
                      rounded
                    ></Image>
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => handleRemoveFromCart(item.product)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>
                {/* reduce method om prijzen samen te brengen. 
                
                  note: quantity/availability is niet functioneel
                */}
                Subtotal $ (
                {cartItems
                  .reduce((acc, currentItem) => acc + currentItem.price, 0)
                  .toFixed(2)}
                )
              </h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                onClick={handleCheckout}
                type="button"
                className="btn-block"
                disabled={cartItems.length === 0 ? true : false}
              >
                Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;
