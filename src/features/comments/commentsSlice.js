import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// const url = "htt[://localhost:3001";
// import data from api and put as value in initial state
import * as readableApi from "../../utils/api";

const initialState = {
  comments: [],
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
const commentsSlice = createSlice({
  name: "comments",
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

export const { getCategories } = commentsSlice.actions;
console.log(commentsSlice);
export default commentsSlice.reducer;
