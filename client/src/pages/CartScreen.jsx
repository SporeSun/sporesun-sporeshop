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
} from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import Message from "../components/Message";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/actions/cartActions';

const CartScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

   const cart = useSelector((state) => state.cart);
   //destructuring cart items
   const { cartItems } = cart;
   console.log("cart...........", cartItems)


   const addToCartHandler = async (product, qty) => {
    dispatch(addToCart({...product, qty}))
  };

  const removeFromCartHandler = async (id) => {
    dispatch(removeFromCart(id))
  };

  const checkoutHandler =  () => {
    navigate("/login?redirect=/shipping")
  };

  return (
    <Row style={{minHeight:"70vh"}}>
      <Col md={8}>
        <h1 style={{ marginBottom: "20px" }}>Shopping Cart</h1>
        {cartItems?.length === 0 ? (
          <Message>
            Your cart is Empty <Link to="/">Go Back</Link>
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
                      {[...Array(item.countInStock).keys()].map((x) => (
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

  //   <Flex style={{ minHeight:"80vh"}}>
  //   <Box flex="8" p="4" >
  //     <Heading mb="4">Shopping Cart</Heading>
  //     {cartItems?.length === 0 ? (
  //       <Text>
  //         Your cart is Empty <Link to="/">Go Back</Link>
  //       </Text>
  //     ) : (
  //       <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
  //         {cartItems.map((item) => (
  //           <Box key={item.id} borderWidth="1px" borderRadius="lg" p="4">
  //             <Flex>
  //               <Box flex="2" mr="4">
  //                 <Image src={item.image} alt={item.name} />
  //               </Box>
  //               <Box flex="3">
  //                 <Link to={`/product/${item._id}`}>{item.name}</Link>
  //                 <Text>${item.price}</Text>
  //                 <Select
  //                   value={item.qty}
  //                   onChange={(e) =>
  //                     addToCartHandler(item, Number(e.target.value))
  //                   }
  //                 >
  //                   {[...Array(item.countInStock).keys()].map((x) => (
  //                     <option key={x + 1} value={x + 1}>
  //                       {x + 1}
  //                     </option>
  //                   ))}
  //                 </Select>
  //                 <Button
  //                   type="button"
  //                   variant="light"
  //                   onClick={() => removeFromCartHandler(item._id)}
  //                 >
  //                   <FaShoppingCart />
  //                 </Button>
  //               </Box>
  //             </Flex>
  //           </Box>
  //         ))}
  //       </SimpleGrid>
  //     )}
  //   </Box>
  //   <Box flex="4" p="4">
  //     <Box borderWidth="1px" borderRadius="lg" p="4">
  //       <List spacing={3}>
  //         <ListItem>
  //           <Text>
  //             Subtotal (
  //             {cartItems.reduce((acc, item) => acc + item.qty, 0)} items)
  //           </Text>
  //           <Text>
  //             $
  //             {cartItems
  //               .reduce((acc, item) => acc + item.qty * item.price, 0)
  //               .toFixed(2)}
  //           </Text>
  //         </ListItem>
  //         <ListItem>
  //           <Button
  //             type="button"
  //             isFullWidth
  //             disabled={cartItems.length === 0}
  //             onClick={checkoutHandler}
  //           >
  //             Proceed To Checkout
  //           </Button>
  //         </ListItem>
  //       </List>
  //     </Box>
  //   </Box>
  // </Flex>
  );
};

export default CartScreen;
