import React from "react";
import ReactDOM from "react-dom";
import "../src/index.css";
import App from "./App";
// import { createStore } from "redux";
import { Provider } from "react-redux";
import store from "./store/store";

import { getAllCats } from "./features/categories/categoriesSlice";
import { receivePosts } from "./features/posts/postsSlice";

store.dispatch(getAllCats());
store.dispatch(receivePosts());
// middleware, reducer

// import reducer from "./reducers";
// console.log(reducer);
// import middleware from "./middleware";
// import { composeWithDevTools } from "@redux-devtools/extension";

// const store = createStore(reducer, composeWithDevTools(middleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
