import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import "./utils/i18n";
import App from "./App.tsx";
import "./index.css";
import { store } from "./utils/store.ts";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>,
  </React.StrictMode>
);
