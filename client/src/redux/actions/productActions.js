// src/redux/actions/productActions.js
export const addProductToCart = (product) => ({
    type: 'ADD_PRODUCT_TO_CART',
    payload: product,
  });