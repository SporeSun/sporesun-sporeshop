import React from "react";
import { Box, SimpleGrid, useQuery } from "@chakra-ui/react";
import "./home.css";
import Product from "../components/Product";
import { useLazyQuery } from "@apollo/client";
import { QUERY_ALL_PRODUCTS } from "../utils/queries";
export default function ProductsPage() {
  const productData = useLazyQuery(QUERY_ALL_PRODUCTS);
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
