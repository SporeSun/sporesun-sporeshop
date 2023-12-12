import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../../utils/cartUtils";

// const initialState = localStorage.getItem("cart")
//   ? JSON.parse(localStorage.getItem("cart"))
//   : { cartItems: [], shippingAddress: {}, payment: "PayPal" };

const initialState = localStorage.getItem("cart")
? {
    ...JSON.parse(localStorage.getItem("cart")),
    itemsPrice: Number(JSON.parse(localStorage.getItem("cart")).itemsPrice) || 0,
    taxPrice: Number(JSON.parse(localStorage.getItem("cart")).taxPrice) || 0,
    totalPrice: Number(JSON.parse(localStorage.getItem("cart")).totalPrice) || 0,
  }
: {
    cartItems: [],
    shippingAddress: {},
    payment: "PayPal",
    itemsPrice: 0,
    shippingPrice: "10",
    taxPrice: 0,
    totalPrice: 0,
  };


  console.log("inintail values............", initialState)
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
        console.log("caliiiiiiiiiiii")
      const item = action.payload;
      if (item.qty === undefined) {
        item.qty = 1;
      }
      //clecking is already exist in card or not
      const existItem = state.cartItems.find((x) => x._id === item._id);

      if (existItem) {
        // If the item exists, increase its quantity
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
