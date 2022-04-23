import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvier } from "./context/authContext/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvier>
      <App />
    </AuthContextProvier>
  </React.StrictMode>,
  document.getElementById("root")
);
