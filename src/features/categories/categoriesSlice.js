import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// const url = "htt[://localhost:3001";
// import data from api and put as value in initial state
import * as ReadableApi from "../../utils/ReadableApi";
console.log(ReadableApi);
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

export const getAllCats = createAsyncThunk("categories/getAllCats", () => {
  async () => {
    const response = await ReadableApi.getAllCategories();
    return response;
  };
});
console.log(getAllCats());
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
    builder.addCase(getAllCats.fulfilled, (state, action) => {
      state.push(...action.payload);
    });
  },
});

// export const { getCategories } = categoriesSlice.actions;
console.log(categoriesSlice);
export default categoriesSlice.reducer;
