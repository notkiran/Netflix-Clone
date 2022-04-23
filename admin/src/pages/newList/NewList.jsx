import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getMovies } from "../../context/movieContext/apiCalls";
import "./newList.css";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { ListContext } from "./../../context/listContext/ListContext";
import { createList } from "../../context/listContext/apiCalls";

export default function NewList() {
  const [list, setList] = useState(null);

  const history = useHistory();

  const { dispatch } = useContext(ListContext);
  const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatchMovie);
  }, [dispatchMovie]);

  const handleChange = (e) => {
    setList({ ...list, [e.target.name]: e.target.value });
  };

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({ ...list, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createList(list, dispatch);
    history.push("/lists");
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New List</h1>
      <form className="addProductForm">
        <div className="formLeft">
          <div className="addProductItem">
            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="Popular movies"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Genre</label>
            <input
              type="text"
              name="genre"
              placeholder="action, thriller, comedy"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Type</label>
            <select name="type" id="type" onChange={handleChange}>
              <option>Type</option>
              <option value="movie">Movie</option>
              <option value="series">Series</option>
            </select>
          </div>
        </div>
        <div className="formRight">
          <div className="addProductItem">
            <label>Content</label>
            <select
              multiple
              name="content"
              id="content"
              onChange={handleSelect}
              style={{ height: "280px" }}
            >
              {movies.map((movie) => (
                <option key={movie._id} value={movie._id}>
                  {movie.title}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button className="addProductButton" onClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
}
