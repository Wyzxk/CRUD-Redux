import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice";

// Store react redux 
export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
