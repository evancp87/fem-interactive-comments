import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// const url = "htt[://localhost:3001";
// import data from api and put as value in initial state
import * as ReadableApi from "../../utils/ReadableApi";

const initialState = {
  categories: [],
};

// export const getAllCats = createAsyncThunk(
//   "categories/getAllCats",
//   async () => {
//     const response = await ReadableApi.getAllCategories();
//     return response;
//   }
// );

export const getAllCats = createAsyncThunk(
  "categories/getAllCats",
  async () => {
    try {
      const response = await ReadableApi.getAllCategories();
      return response;
    } catch (err) {
      console.error("err", err);
    }
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
  extraReducers: (builder) => {
    builder.addCase(getAllCats.fulfilled, (state, action) => {
      // state.push(...action.payload);
      // [state, action.payload];
      // state.categories = state.categories.concat(action.payload);
      // console.log(action);
      // state.categories = action.payload;
      let categories = [...action.payload];
      return categories;
    });
  },
});

// export const { getCategories } = categoriesSlice.actions;
console.log(categoriesSlice);
export default categoriesSlice.reducer;
