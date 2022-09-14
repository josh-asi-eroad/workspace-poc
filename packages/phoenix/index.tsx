import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import App from "./src/App";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container as HTMLElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
