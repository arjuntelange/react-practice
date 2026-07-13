import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, actions) => {
      const existingItem = state.cart.find(
        (currentItem) => currentItem.id === actions.payload.id,
      );

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cart.push(actions.payload);
      }
    },

    removeFromCart: (state, actions) => {
      state.cart = state.cart.filter(
        (currentItem) => currentItem.id !== actions.payload,
      );
    },

    increaseQuantity: (state, actions) => {
      const item = state.cart.find(
        (currentItem) => currentItem.id === actions.payload,
      );

      if (item) {
        item.quantity++;
      }
    },

    decreaseQuantity: (state, actions) => {
      const item = state.cart.find(
        (currentItem) => currentItem.id === actions.payload,
      );

      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },

    clearCart: (state, actions) => {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
