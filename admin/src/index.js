import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvier } from "./context/authContext/AuthContext";
import { MovieContextProvier } from "./context/movieContext/MovieContext";
import { ListContextProvier } from "./context/listContext/ListContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvier>
      <MovieContextProvier>
        <ListContextProvier>
          <App />
        </ListContextProvier>
      </MovieContextProvier>
    </AuthContextProvier>
  </React.StrictMode>,
  document.getElementById("root")
);
