import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./services/i18next";


ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback="Loading...">
      <App />
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

