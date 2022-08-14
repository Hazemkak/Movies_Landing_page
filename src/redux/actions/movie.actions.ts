import Axios from "axios";
import { MovieTypes } from "../types/movie.types";

export const getMovieList = (
  type: "popular" | "top_rated" | "upcoming",
  page?: number
): any => {
  return (dispatch: Function, getState: any) => {
    dispatch(
      updateMovieState({
        loading: true,
      })
    );
    let baseUrl = `https://api.themoviedb.org/3/movie/${type}?api_key=${"deca6769d2ef7df89453b5e7b1a3b5cf"}`;
    if (page)
      baseUrl = `https://api.themoviedb.org/3/movie/${type}?api_key=${"deca6769d2ef7df89453b5e7b1a3b5cf"}&page=${page}`;
    Axios({
      method: "GET",
      url: baseUrl,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res.data);
        const { page, results, total_pages, total_results } = res.data;
        dispatch(
          updateMovieState({
            movies: results,
            page,
            total_pages,
            total_results,
            loading: false,
            category: type,
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getMovieDetails = (movieId: number): any => {
  return (dispatch: Function) => {
    dispatch(
      updateMovieState({
        loading: true,
      })
    );
    Axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${movieId}?api_key=deca6769d2ef7df89453b5e7b1a3b5cf`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res.data);
        dispatch(
          updateMovieState({
            current_movie: res.data,
            category: "",
            loading: false,
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const updateMovieState = (payload: any) => {
  return {
    type: MovieTypes.UPDATE_MOVIES,
    payload,
  };
};
