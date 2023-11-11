import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAPIAct = createAsyncThunk("get/api", async (url) => {
  try {
    const response = await axios.get(url);
    const modifiedData = response.data.map((item) => ({
      ...item,
      stock: 20,
      status: "active",
    }));

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
});

export const getAPIActById = createAsyncThunk("get/apiById", async (url) => {
  try {
    const response = await axios.get(url);
    const modifiedData = { ...response.data, stock: 20, status: "active" };
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
});

export const changeStatusProduct = createAsyncThunk(
  "change/status",
  async ({ id, products }) => {
    const updatedProducts = products.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          status: item.status === "active" ? "inactive" : "active",
        };
      }
      return item;
    });
    return updatedProducts;
  }
);

export const changeQuantity = createAsyncThunk(
  "change/addToCart",
  async ({ id, quantity }) => {
    return { id, quantity };
  }
);

export const updateProduct = createAsyncThunk(
  "update/product",
  async ({ id, quantity }) => {
    return { id, quantity };
  }
);

export const updateStock = createAsyncThunk(
  "update/stock",
  async ({ id, stock }) => {
    return { id, stock };
  }
);

export const fetchAPISlice = createSlice({
  name: "fetchAPI",
  initialState: {
    products: [],
    detailProduct: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAPIAct.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(changeStatusProduct.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(getAPIActById.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const { id, quantity } = action.payload;
        state.products = state.products.map((item) =>
          item.id === id ? { ...item, stock: item.stock - quantity } : item
        );
      })
      .addCase(updateStock.fulfilled, (state, action) => {
        console.log("action payload : ", action.payload);
        const { id, stock } = action.payload;
        state.products = state.products.map((item) =>
          item.id === id ? { ...item, stock: stock } : item
        );
      });
  },
});

export default fetchAPISlice.reducer;
