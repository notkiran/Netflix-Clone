import React from "react";
import ReactDOM from "react-dom/client";
import { AuthContextProvier } from "./context/authContext/AuthContext";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvier>
      <App />
    </AuthContextProvier>
  </React.StrictMode>
);
