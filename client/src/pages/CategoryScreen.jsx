import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Product from "../components/Product";
import {
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CATEGORIES, QUERY_PRODUCTS } from "../utils/queries";
export default function CategoryScreen() {
  const { category: proCategory } = useLazyQuery(QUERY_CATEGORIES)
  const productData = useLazyQuery(QUERY_PRODUCTS, {variables:{category: proCategory._id}});
  const filteredProducts = productData.filter(
    (product) => product.category === proCategory
  );
    console.log(productData);
  return (
    <Box p={4}>
        <h1 style={{color: '#EEEEEE'}}>Category: {proCategory}</h1>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 5 }} spacing={4}>
        {filteredProducts.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
