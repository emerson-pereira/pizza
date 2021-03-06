import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./components/styles/GlobalStyles";
import Routes from "./routes";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);
