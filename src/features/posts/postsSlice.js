import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// const url = "htt[://localhost:3001";
// import data from api and put as value in initial state
import * as readableApi from "../../utils/api";

const initialState = {
  posts: [],
};

export const getAllCategories = createAsyncThunk(
  "posts/getAllCategories",
  () => {
    return readableApi()
      .then((response) => response.json)
      .catch((error) => {
        "error", error;
      });
  }
);
const postsSlice = createSlice({
  name: "posts",
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

export const { getCategories } = postsSlice.actions;
console.log(postsSlice);
export default postsSlice.reducer;
