import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// const url = "htt[://localhost:3001";
// import data from api and put as value in initial state
import * as ReadableApi from "../../utils/ReadableApi";

const initialState = {
  comments: [],
};

export const receiveComments = createAsyncThunk(
  "comments/receiveComments",
  async (id) => {
    try {
      const response = await ReadableApi.getCommentsByPostId(id);
      return response;
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const commentDetail = createAsyncThunk(
  "comments/commentDetail",
  async (id) => {
    try {
      const response = await ReadableApi.getCommentDetail(id);
      return response;
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const addComment = createAsyncThunk(
  "comments/addComment",
  async (newComment) => {
    try {
      const response = await ReadableApi.addComment(newComment);
      return response;
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const updateComment = createAsyncThunk(
  "comments/updateComment",
  async (comment) => {
    try {
      const response = await ReadableApi.editComment(comment);
      return response;
    } catch (error) {
      "error", error;
    }
  }
);

export const removeComment = createAsyncThunk(
  "categories/removeComment",
  async (comment) => {
    try {
      const response = await ReadableApi.deleteComment(comment);
      return response;
    } catch (error) {
      "error", error;
    }
  }
);

export const voteOnComment = createAsyncThunk(
  "categories/voteOnComment",
  async (params) => {
    try {
      const response = await ReadableApi.voteComment(params);
      return response;
    } catch (error) {
      "error", error;
    }
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
    builder.addCase(receiveComments.fulfilled, (state, action) => {
      let comments = [...action.payload];
      comments = comments.sort((a, b) => b.timestamp - a.timestamp);
      return comments;
    }),
      builder.addCase(commentDetail.fulfilled, (state, action) => {
        const { id } = action.payload;
        let comment = state.find((comment) => comment.id === id);
        return comment;
      }),
      builder.addCase(addComment.fulfilled, (state, action) => {
        state.push(...action.payload);
        state.sort((a, b) => b.timestamp - a.timestamp);
      }),
      builder.addCase(updateComment.fulfilled, (state, action) => {
        return [action.payload];
      }),
      builder.addCase(removeComment.fulfilled, (state, action) => {
        const { id } = action.payload;
        let removedComments = state.filter((comment) => comment.id !== id);
        return removedComments;
      }),
      builder.addCase(voteOnComment.fulfilled, (state, action) => {
        const { id, voteScore } = action.payload;
        let votedComment = state.find((comment) => comment.id === id);
        votedComment.voteScore = voteScore;
      });
  },
});

export const { getCategories } = commentsSlice.actions;
console.log(commentsSlice);
export default commentsSlice.reducer;
