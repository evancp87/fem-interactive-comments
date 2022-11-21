import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// const url = "htt[://localhost:3001";
// import data from api and put as value in initial state
import * as ReadableApi from "../../utils/ReadableApi";

const initialState = {
  comments: [],
};

export const receiveComments = createAsyncThunk(
  "comments/receiveComments",
  (id) => {
    return ReadableApi.getCommentsByPostId(id)
      .then((response) => response.json)
      .catch((error) => {
        "error", error;
      });
  }
);

export const commentDetail = createAsyncThunk(
  "comments/commentDetail",
  (id) => {
    return ReadableApi.getCommentDetail(id)
      .then((response) => response.json)
      .then((data) => data);
  }
);

export const addComment = createAsyncThunk(
  "comments/addComment",
  (newComment) => {
    return ReadableApi.addComment(newComment)
      .then((response) => response.json)
      .catch((error) => {
        "error", error;
      });
  }
);

export const updateComment = createAsyncThunk(
  "comments/updateComment",
  (comment) => {
    return ReadableApi.editComment(comment)
      .then((response) => response.json)
      .catch((error) => {
        "error", error;
      });
  }
);

export const removeComment = createAsyncThunk(
  "categories/removeComment",
  (comment) => {
    return ReadableApi.deleteComment(comment)
      .then((response) => response.json)
      .catch((error) => {
        "error", error;
      });
  }
);

export const voteOnComment = createAsyncThunk(
  "categories/voteOnComment",
  (params) => {
    return ReadableApi.voteComment(params)
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
