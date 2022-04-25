import "./app.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Watch from "./Pages/Watch/Watch";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={user ? <Home /> : <Navigate to="/register" />}
        />
      </Routes>
      <Routes>
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />
      </Routes>
      <Routes>
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
      </Routes>
      {user && (
        <>
          <Routes>
            <Route path="/movies" element={<Home type="movie" />} />
          </Routes>
          <Routes>
            <Route path="/series" element={<Home type="series" />} />
          </Routes>
          <Routes>
            <Route path="/watch" element={<Watch />} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
