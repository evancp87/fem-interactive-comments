import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../features/categories/categoriesSlice";
import commentsReducer from "../features/comments/commentsSlice";
import postsReducer from "../features/posts/postsSlice";

export default configureStore({
  reducer: {
    categories: categoriesReducer,
    comments: commentsReducer,
    posts: postsReducer,
  },
  // middleware: [thunk, logger]
});
