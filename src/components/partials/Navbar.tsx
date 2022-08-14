import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getMovieList } from "../../redux/actions/movie.actions";
import { BiCategoryAlt } from "react-icons/bi";

function Navbar() {
  const dispatch = useDispatch();
  const movies = useSelector((state: any) => state.movie);
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <h1 className="logo">Movies HD</h1>
        </div>
        <div className="menu-container">
          <ul className="menu-list">
            <li className="menu-list-item active">
              <BiCategoryAlt color="#4dbf00" />
              &nbsp; Categories
            </li>
            <li
              onClick={() => dispatch(getMovieList("popular"))}
              className="menu-list-item navbar-item"
              style={{
                color: movies?.category === "popular" ? "#4dbf00" : "white",
              }}
            >
              Popular
            </li>
            <li
              onClick={() => dispatch(getMovieList("top_rated"))}
              className="menu-list-item navbar-item"
              style={{
                color: movies?.category === "top_rated" ? "#4dbf00" : "white",
              }}
            >
              Top-rated
            </li>
            <li
              onClick={() => dispatch(getMovieList("upcoming"))}
              className="menu-list-item navbar-item"
              style={{
                color: movies?.category === "upcoming" ? "#4dbf00" : "white",
              }}
            >
              Upcoming
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
