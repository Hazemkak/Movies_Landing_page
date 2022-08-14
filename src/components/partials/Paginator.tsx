import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovieList } from "../../redux/actions/movie.actions";

function Paginator() {
  const movie = useSelector((state: any) => state.movie);
  const dispatch = useDispatch();
  const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="pagination">
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            movie?.page < movie.total_pages &&
              dispatch(getMovieList("popular", movie?.page + 1));
          }}
        >
          &laquo;
        </button>
        {items.map((val: number) => (
          <button
            style={{ textDecoration: val === 0 ? "underline" : "none" }}
            onClick={(e) => {
              e.preventDefault();
              val !== 0 && dispatch(getMovieList("popular", movie?.page + val));
            }}
          >
            {movie?.page + val}
          </button>
        ))}
        <button
          onClick={(e) => {
            e.preventDefault();
            movie?.page > 1 &&
              dispatch(getMovieList("popular", movie?.page - 1));
          }}
        >
          &raquo;
        </button>
      </div>
    </div>
  );
}

export default Paginator;
