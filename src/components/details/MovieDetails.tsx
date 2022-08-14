import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function MovieDetails() {
  const movie = useSelector((state: any) => state.movie.current_movie);
  useEffect(() => {
    console.log(movie);
  }, []);
  return (
    <div className="details-container">
      <div className="details_content">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <div className="d">
          <div>release_date: {movie.release_date}</div>
          <div>status: {movie.status}</div>
          <div>tagline: {movie.tagline}</div>
          <div>vote_average: {movie.vote_average}</div>
        </div>
        <div className="btn">
          <button className="btn_watch">Watch Now</button>
          <button className="btn_download">Download</button>
        </div>
      </div>
      <div className="details_image">
        <img
          className="movie-list-item-img"
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          alt={`${movie.title}_image`}
        />
      </div>
    </div>
  );
}

export default MovieDetails;
