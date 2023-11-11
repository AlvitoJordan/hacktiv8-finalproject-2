import { configureStore } from "@reduxjs/toolkit";
import fetchReducer from "./fetch/Get";
import addCartReducer from "./cart/Cart";

export const store = configureStore({
  reducer: {
    getAPI: fetchReducer,
    addCart: addCartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
