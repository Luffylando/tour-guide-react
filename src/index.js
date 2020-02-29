import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Router } from "react-router-dom";
import history from "./history";
import Main from "./switch/Main";
import GlobalStyle from "./styles/GlobalStyle";

ReactDOM.render(
  <Router history={history}>
    <GlobalStyle />
    <Main />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
