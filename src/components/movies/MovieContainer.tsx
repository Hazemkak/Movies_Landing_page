import { useEffect } from "react";
import MovieList from "./MovieList";
import "../../styles/main.css";
import MovieItem from "./MovieItem";
import { useDispatch, useSelector } from "react-redux";
import {
  getMovieList,
  getMovieDetails,
} from "../../redux/actions/movie.actions";
import Paginator from "../partials/Paginator";
import Loader from "../partials/Loader";
import MovieDetails from "../details/MovieDetails";

interface MovieItemProp {
  title: string;
  poster_path: string;
  overview: string;
  id: number;
}

function MovieContainer() {
  const dispatch = useDispatch();
  const movies = useSelector((state: any) => state.movie);

  useEffect(() => {
    dispatch(getMovieList("popular"));
  }, []);

  return (
    <div className="container">
      {!movies.loading ? (
        <>
          <div className="content-container">
            {movies?.category === "" ? (
              <MovieDetails />
            ) : (
              <>
                <MovieList title="Popular Movies">
                  <>
                    {movies?.movies.map((entry: MovieItemProp) => {
                      return (
                        <MovieItem
                          title={entry.title}
                          imageUrl={`https://image.tmdb.org/t/p/w500/${entry.poster_path}`}
                          handleShow={() => {
                            dispatch(getMovieDetails(entry.id));
                          }}
                        />
                      );
                    })}
                  </>
                </MovieList>
                <Paginator />
              </>
            )}
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default MovieContainer;
