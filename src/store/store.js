import { configureStore, combineReducers } from "@reduxjs/toolkit";
import categoriesReducer from "../features/categories/categoriesSlice";
import commentsReducer from "../features/comments/commentsSlice";
import postsReducer from "../features/posts/postsSlice";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import logger from "redux-logger";

const persistConfig = {
  key: "root",
  storage,
  timeout: 1,
};

const rootReducer = combineReducers({
  categories: categoriesReducer,
  comments: commentsReducer,
  posts: postsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});
export const persistor = persistStore(store);
// persistor.purge();
