import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const app = (
  <React.StrictMode>
    <App pathname={window.location.pathname} />
  </React.StrictMode>
);

const root = document.getElementById("root")!;
if (import.meta.env.PROD) {
  ReactDOM.hydrateRoot(root, app);
} else {
  ReactDOM.createRoot(root).render(app);
}
