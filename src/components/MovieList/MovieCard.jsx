import "./MovieCard.css";
import Star from "../../assets/star.png";

import React from "react";

export default function MovieCard({ movie }) {
  return (
    // 영화 카드
    <a className="movie_card">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}
        `}
        alt="movie poster"
        className="movie_poster"
      />

      <div className="movie_details">
        <h3 className="movie_details_heading">{movie.title}</h3>
        <div className="align_center movie_date_rate">
          <p>{movie.release_data}</p>
          <p className="align_center">
            {movie.vote_average}
            <img src={Star} alt="rating icon" className="card_emoji" />
          </p>
        </div>
        <p className="movie_description">{movie.overview}</p>
      </div>
    </a>
  );
}
