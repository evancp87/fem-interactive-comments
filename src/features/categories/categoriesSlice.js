import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// const url = "htt[://localhost:3001";
// import data from api and put as value in initial state
import * as readableApi from "../../utils/api";

const initialState = {
  categories: [],
};

export const getAllCategories = createAsyncThunk(
  "categories/getAllCategories",
  () => {
    return readableApi()
      .then((response) => response.json)
      .catch((error) => {
        "error", error;
      });
  }
);
const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    // getCategories: (state) => {
    //   return {
    //     // categories => state.categories
    //     categories: state.categories,
    //     // can access actions and payload
    //   };
    // },
  },
  extraReducers(builder) {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.push(...action.payload);
    });
  },
});

export const { getCategories } = categoriesSlice.actions;
console.log(categoriesSlice);
export default categoriesSlice.reducer;
