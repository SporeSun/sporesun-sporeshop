import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import "./home.css";
import Product from "../components/Product";
import productData from "../data/products";
export default function ProductsPage() {
  return (
    <>
      <Box p={4}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 5 }} spacing={4}>
          {productData.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}
