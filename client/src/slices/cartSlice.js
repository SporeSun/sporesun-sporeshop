import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [], shippingAddress: {}, payment: "PayPal" };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      // Initialize qty if it's not defined
      if (item.qty === undefined) {
        item.qty = 1;
      }
      //clecking is already exist in card or not
      const existItem = state.cartItems.find((x) => x._id === item._id);

      if (existItem) {
        // If the item exists, update its quantity
        state.cartItems = state.cartItems.map((x) =>
          x._id === existItem._id ? { ...x, qty: x.qty + item.qty } : x
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

    clearCartItems: (state, action) => {
      state.cartItems = [];
      return updateCart(state);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCartItems,
} = cartSlice.actions;

export default cartSlice.reducer;
