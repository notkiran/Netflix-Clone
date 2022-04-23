import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvier } from "./context/authContext/AuthContext";
import { MovieContextProvier } from "./context/movieContext/MovieContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvier>
      <MovieContextProvier>
        <App />
      </MovieContextProvier>
    </AuthContextProvier>
  </React.StrictMode>,
  document.getElementById("root")
);
