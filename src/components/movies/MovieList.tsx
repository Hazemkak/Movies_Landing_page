import React from "react";
interface MovieListProps {
  children?: JSX.Element;
  title: string;
}
function MovieList(props: MovieListProps) {
  const { children, title } = props;
  return (
    <div className="movie-list-container">
      <h1 className="movie-list-title">{title}</h1>
      <div className="movie-list-wrapper">
        <div className="movie-list">{children}</div>
      </div>
    </div>
  );
}

export default MovieList;
