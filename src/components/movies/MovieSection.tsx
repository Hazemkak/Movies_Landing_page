import React, { MouseEventHandler } from "react";
import "../../styles/main.css";

interface MovieSectionProps {
  movie: {
    poster_path: string;
    title: string;
    desc: string;
    handleShow: MouseEventHandler<HTMLButtonElement>;
  };
}

function MovieSection(props: MovieSectionProps) {
  const { movie } = props;
  return (
    <div
      className="featured-content"
      style={{
        background:
          " linear-gradient(to bottom, rgba(0,0,0,0), #151515), url('img/f-1.jpg');",
      }}
    >
      <img
        className="featured-title"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt=""
      />
      <p className="featured-desc">{movie.desc}</p>
      <button onClick={movie.handleShow} className="featured-button">
        WATCH
      </button>
    </div>
  );
}

export default MovieSection;
