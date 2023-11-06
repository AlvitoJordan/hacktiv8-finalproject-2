import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAPIAct = createAsyncThunk("get/api", async (url) => {
  try {
    const response = await axios.get(url);
    const modifiedData = response.data.map((item) => ({ ...item, stock: 20, status: "active" }));

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
});

export const getAPIActById = createAsyncThunk("get/apiById", async (id) => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    const modifiedData = { ...response.data, stock: 20, status: "active" };
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
});
export const changeStatusProduct = createAsyncThunk("change/status", async ({ id, products }) => {
  const updatedProducts = products.map((item) => {
    if (item.id === id) {
      return { ...item, status: item.status === "active" ? "inactive" : "active" };
    }
    return item;
  });
  return updatedProducts;
});

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
        state.detailProduct = action.payload;
      });
  },
});

export default fetchAPISlice.reducer;
