import React from "react";
import ReactDOM from "react-dom";
import "../src/index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import { getAllCats } from "./features/categories/categoriesSlice";
import { receivePosts } from "./features/posts/postsSlice";

// console.log(store.dispatch(getAllCats()));
// console.log(store.dispatch(receivePosts()));
// store.dispatch(getAllCats());
// store.dispatch(receivePosts());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
