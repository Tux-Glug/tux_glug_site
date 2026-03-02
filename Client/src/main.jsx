import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

//? Use BrowserRouter is the backend is established

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );

//? Use HashRouter for Static website without any backend, just hardcoded everything

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <App />
  </HashRouter>
);