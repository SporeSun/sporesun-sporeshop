import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import productData from "../data/products";
import Product from "../components/Product";
import {
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
export default function CategoryScreen() {
  const { category: proCategory } = useParams();

  const filteredProducts = productData.filter(
    (product) => product.category === proCategory
  );

  return (
    <Box p={4}>
        <h1>Category: {proCategory}</h1>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 5 }} spacing={4}>
        {filteredProducts.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
