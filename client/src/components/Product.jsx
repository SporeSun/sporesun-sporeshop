import { useDispatch } from 'react-redux';
import Rating from "./Rating";
import "../assets/styles/Product.css";
import { addToCart } from "../redux/actions/cartActions";
import {
  Box,
  Text,
  Heading,
  Image,
  Link,
  Button,
  Badge,
} from "@chakra-ui/react";
import { FaCartPlus } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";


const Product = ({ product }) => {


  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));

  };
  return (
    <>
  <Box borderWidth="1px" borderRadius="lg" p="3" className="productCart">
      <Image src={product.image} alt={product.name} maxH="200px" objectFit="cover" />
      <Box mt="3">
        <Heading textAlign="center" className="proName">
          {product.name}
        </Heading>
        <Text
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          fontSize={["sm", "md", "lg"]}
        >
          <ReactStars
            edit={false}
            color={"rgba(20, 20, 20, 0.1)"}
            activeColor={"#FFB319"}
            size={["12px", "15px", "20px"]}
            value={product?.rating || 0}
            isHalf={true}
          />
          <span>{`${product?.numReviews || 0} reviews`}</span>
        </Text>
        <Text as="h3">${product.price}</Text>
        <Button
          className="addToCartBtn"
          onClick={() => handleAddToCart(product)}
          mt="2"
          isFullWidth
          
        >
          <FaCartPlus />
        </Button>
      </Box>
    </Box>
    </>
  );
};

export default Product;
