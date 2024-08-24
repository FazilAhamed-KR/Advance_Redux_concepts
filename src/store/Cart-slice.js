import { createSlice } from "@reduxjs/toolkit";

const CartItemSlice = createSlice({
  name: "Great_Product",
  initialState: {
    item: [],
    totalQuantity: 0,
    change: false,
  },
  reducers: {
    replaceCart: (state, action) => {
      state.totalQuantity = action.payload.totalQuantity;
      state.item = action.payload.item;
    },
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.item.find(
        (itemId) => itemId.id === newItem.id
      );
      state.totalQuantity++;
      state.change = true;
      if (!existingItem) {
        state.item.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.item.find((itemId) => itemId.id === id);
      state.totalQuantity--;
      state.change = true;
      if (existingItem.quantity === 1) {
        state.item = state.item.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const { addItem, removeItem, replaceCart } = CartItemSlice.actions;
export default CartItemSlice;
