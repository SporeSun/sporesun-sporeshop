import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    getProductsInCategory(category: $category) {
      _id
      name
      description
      price
      quantity
      image
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ProductInput]) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    getProducts {
      _id
      name
      image
      description
      price
      stock
      category
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
      getCategories {
        _id
        name
        image
        description
      }
    
    
  }
`;
export const QUERY_CATEGORY_BY_NAME = gql`
    query please($name: String!){
      getCategoryByName(name: $name) {
        _id
        name
        image
        description
        products{
          _id
          name
          image
          description
          stock
          price
        }
      }
    }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;
