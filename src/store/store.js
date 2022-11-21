import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../features/categories/categoriesSlice";
import commentsReducer from "../features/comments/commentsSlice";
import postsReducer from "../features/posts/postsSlice";
// import logger from "redux-logger";
export default configureStore({
  reducer: {
    categories: categoriesReducer,
    comments: commentsReducer,
    posts: postsReducer,
  },
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
