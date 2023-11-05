import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAPIAct = createAsyncThunk("get/api", async (url) => {
  try {
    const response = await axios.get(url);
    const modifiedData = response.data.map((item) => ({ ...item, stock: 20 }));

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
});

export const getAPIActById = createAsyncThunk("get/apiById", async (id) => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    const modifiedData = { ...response.data, stock: 20 };
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
});


export const fetchAPISlice = createSlice({
  name: "fetchAPI",
  initialState: {
    product: [],
    detailProduct: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAPIAct.fulfilled, (state, action) => {
        state.product = action.payload;
      })
      .addCase(getAPIActById.fulfilled, (state, action) => {
        state.detailProduct = action.payload;
      });
  },
});

export default fetchAPISlice.reducer;
