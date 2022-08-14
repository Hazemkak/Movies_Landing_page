import React, { MouseEventHandler } from "react";
import "../../styles/main.css";
export interface MovieItemProps {
  imageUrl: string;
  title: string;
  handleShow: MouseEventHandler<HTMLButtonElement>;
}
function MovieItem(props: MovieItemProps) {
  const { title, imageUrl, handleShow } = props;
  return (
    <div className="movie-list-item">
      <div className="short-desc-div">
        <div>
          <img
            className="movie-list-item-img"
            src={imageUrl}
            alt={`${title}_image`}
          />
        </div>
        <div>
          <span className="movie-list-item-title">{title}</span>
          <button onClick={handleShow} className="movie-list-item-button">
            Watch
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieItem;
