import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const addToCart = createAsyncThunk("cart/addToCart", async (product) => {
  return product;
});
export const changeQuantity = createAsyncThunk("change/addToCart", async ({ id, quantity }) => {
  return { id, quantity };
});

const AddCartSlice = createSlice({
  name: "addCart",
  initialState: {
    cart: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.cart.push(action.payload);
    });
    builder.addCase(changeQuantity.fulfilled, (state, action) => {
      const { id, quantity } = action.payload;
      state.cart = state.cart.map((item) => (item.id === id ? { ...item, quantity: quantity } : item));
    });
  },
});

export default AddCartSlice.reducer;
