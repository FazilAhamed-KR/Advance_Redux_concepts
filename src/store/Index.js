import { configureStore } from "@reduxjs/toolkit";
import UiSlice from "./Ui-slice";
// import cartSlice from "./cart";
import CartItemSlice from "./Cart-slice";

const store = configureStore({
  reducer: {
    ui: UiSlice.reducer,
    // counter: cartSlice.reducer,
    CartItemSlice: CartItemSlice.reducer,
  },
});

export default store;
