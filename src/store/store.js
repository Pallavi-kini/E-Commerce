import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";
import { thunk } from "redux-thunk";
import ApiSlice from "./ApiSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    api: ApiSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
// applyMiddleware(thunk);
