import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const addToCart = createAsyncThunk("cart/addToCart", async (product) => {
  return product;
});
export const addToCheckout = createAsyncThunk(
  "cart/addCheckout",
  async (product) => {
    return product;
  }
);
export const changeQuantity = createAsyncThunk(
  "change/addToCart",
  async ({ id, quantity }) => {
    return { id, quantity };
  }
);

export const removeProduct = createAsyncThunk(
  "remove/product",
  async (data) => {
    console.log(data);
    return data;
  }
);

const AddCartSlice = createSlice({
  name: "addCart",
  initialState: {
    cart: [],
    checkout: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addToCart.fulfilled, (state, action) => {
      const productInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (productInCart) {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        state.cart.push(action.payload);
      }
    });
    builder.addCase(addToCheckout.fulfilled, (state, action) => {
      state.checkout = action.payload;
    });
    builder.addCase(changeQuantity.fulfilled, (state, action) => {
      const { id, quantity } = action.payload;
      state.cart = state.cart.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      );
    });
    builder.addCase(removeProduct.fulfilled, (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    });
  },
});

export default AddCartSlice.reducer;
