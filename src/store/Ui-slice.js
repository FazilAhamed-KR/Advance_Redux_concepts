import { createSlice } from "@reduxjs/toolkit";
const uiSlice = createSlice({
  name: "ui",
  initialState: { cartShow: false, notification: null },
  reducers: {
    toggle: (state) => {
      state.cartShow = !state.cartShow;
    },
    showNotification: (state, action) => {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const { toggle, showNotification } = uiSlice.actions;
export default uiSlice;
