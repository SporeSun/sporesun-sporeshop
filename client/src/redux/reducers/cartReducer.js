// src/redux/reducers/cartReducer.js
import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../../utils/cartUtils";

const initialState = localStorage.getItem("cart")
? JSON.parse(localStorage.getItem("cart"))
: { cartItems: [], shippingAddress: {}, payment: "PayPal" };
  
//   const cartReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'ADD_TO_CART':
//         console.log(hhhhhhhhhhhdddddddddddddddddd)
//         return {
//           ...state,
//           cartItems: [...state.cartItems, action.payload],
//         };
//       case 'REMOVE_FROM_CART':
//         return {
//           ...state,
//           cartItems: state.cartItems.filter(item => item.id !== action.payload),
//         };
//       case 'CLEAR_CART':
//         return {
//           ...state,
//           cartItems: [],
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default cartReducer;
  


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
      addToCart: (state, action) => {
        const item = action.payload;
  
        //clecking is already exist in card or not
        const existItem = state.cartItems.find((x) => x._id === item._id);
  
        if (existItem) {
          state.cartItems = state.cartItems.map((x) =>
            x._id === existItem._id ? item : x
          );
        } else {
          state.cartItems = [...state.cartItems, item];
        }
  
        return updateCart(state);
      },
  
      removeFromCart: (state, action) => {
        state.cartItems = state.cartItems.filter((x) => x._id !== action.payload);
  
        return updateCart(state);
      },
  
      saveShippingAddress: (state, action) => {
        state.shippingAddress = action.payload;
        return updateCart(state);
      },
  
      savePaymentMethod: (state, action) => {
        state.paymentMethod = action.payload;
        return updateCart(state);
      },
  
      clearCartItems: (state, action) => {
        state.cartItems = [];
        return updateCart(state);
      },
    },
  });
  
  export const {
    addToCart,
    removeFromCart,
    saveShippingAddress,
    savePaymentMethod,
    clearCartItems,
  } = cartSlice.actions;
  
  export default cartSlice.reducer;
  