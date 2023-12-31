import { Link, useNavigate } from "react-router-dom";
// import {
//   Box,
//   Flex,
//   Heading,
//   Image,
//   Button,
//   SimpleGrid,
//   Select,
//   List,
//   ListItem,
//   Text,
// } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa"; // Import the correct icon
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
  FormLabel,
} from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { QUERY_CHECKOUT } from '../utils/queries';
import Message from "../components/Message";
import { useSelector, useDispatch } from 'react-redux';
import { gql, useLazyQuery, useQuery } from '@apollo/client';
import { addToCart, removeFromCart } from '../redux/actions/cartActions';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51OKV4YJe2B9hxOfHBQcu86w2pTFL2Q7GIe9VfEhmuHhCeOP8tRwrGFHA33x5OHiXBq9959HnyLw8Kij4Mcm2prfd00veCARTjd');

const CartScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useState();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

   const cart = JSON.parse(localStorage.getItem("cart"));
   //destructuring cart items
   const { cartItems } = cart;
   console.log("cart...........", cartItems);

   const addToCartHandler = async (product, qty) => {
    dispatch(addToCart({...product, qty}))
  };

  const removeFromCartHandler = async (id) => {
    dispatch(removeFromCart(id))
  };

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);
  console.log("cart state" + state.cart)
  const checkoutHandler =  () => {
    var {loading, error, data} = getCheckout({
      variables: { 
        products: [...cartItems],
      },
    });
  };

  return (
    <Row style={{minHeight:"70vh"}}>
      <Col md={8}>
        <h1 style={{ marginBottom: "20px" }}>Shopping Cart</h1>
        {cartItems?.length === 0 ? (
          <Message>
            Your cart is empty. <Link to="/">Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item?._id}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item?._id}`}>{item?.name}</Link>
                    {/* {item.name} */}

                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={item.qty}
                      onChange={(e) =>
                        addToCartHandler(item, Number(e.target.value))
                      }
                    >
                      {[...Array(item.qty).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button type="button" variant="light"
                    onClick={()=>removeFromCartHandler(item._id)}
                    >
                      <FaTrash />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                items
              </h2>
              $
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type="button"
                className="btn-block"
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed To Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;
