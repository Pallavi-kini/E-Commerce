import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  noOfItem: 0,
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    modify(state, action) {
      switch (action.payload.type) {
        case "add":
          const item = state.cart.some((item) => item.id === action.payload.id);
          if (!item) {
            state.cart.push(action.payload);
            state.noOfItem++;
          }
          break;
        case "remove":
          const itemId = state.cart.findIndex(
            (item) => item.id === action.payload.id
          );
          state.cart.splice(itemId, 1);
          state.noOfItem--;
          break;
        default:
          return state;
      }
    },
  },
});

export const { modify } = cartSlice.actions;
export default cartSlice.reducer;
