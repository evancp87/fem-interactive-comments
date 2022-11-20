import React from "react";
import ReactDOM from "react-dom";
import "../src/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { createStore } from "redux";
import { Provider } from "react-redux";
import store from "./store/store";
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
