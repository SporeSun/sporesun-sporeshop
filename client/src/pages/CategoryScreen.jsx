import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Product from "../components/Product";
import {
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import { useLazyQuery, useQuery } from "@apollo/client";
import { QUERY_ALL_PRODUCTS, QUERY_CATEGORIES, QUERY_CATEGORY_BY_NAME, QUERY_PRODUCTS } from "../utils/queries";
export default function CategoryScreen() {
  let {category} = useParams();
  const {loading, error, data} = useQuery(QUERY_ALL_PRODUCTS);
  if(loading){
    return 'Loading...';
  }
  if(error){
    return `Error! ${error.message}`;
  }
  if(data){
    console.log(data);
    var productData = []
    data.getProducts.map((product)=>{if(product.category === category){
      productData.push(product)}
    });
  }
  return (
    <Box p={4}>
        <h1 style={{color: '#EEEEEE'}}>Category: {category}</h1>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 5 }} spacing={4}>
        {productData.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
