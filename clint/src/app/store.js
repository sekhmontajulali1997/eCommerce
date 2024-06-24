import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice"
import categoryRducer from "../features/category/categorySlice"

const store = configureStore({
  reducer: {
    Products: productsReducer,
    Category: categoryRducer
  },
});

// export store

export default store;
