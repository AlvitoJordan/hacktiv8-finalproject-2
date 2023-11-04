import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAPIAct = createAsyncThunk("get/api", async (url) => {
  try {
    const response = await axios.get(url);
    console.log(response)
    return response.data;
  } 
  catch (error) {
    console.log(error);
  }
});

export const fetchAPISlice = createSlice({
  name: "fetchAPI",
  initialState: {
    product: [],
  },
  
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAPIAct.fulfilled, (state, action) => {
        state.product = action.payload;

      })

  },
});

export default fetchAPISlice.reducer;
