import "./MovieCard.css";
import Star from "../../assets/star.png";

import React from "react";

export default function MovieCard({ movie }) {
  return (
    // 영화 카드
    <a className="movie_card">
      <img
        src="https://t1.daumcdn.net/movie/947a0d62f2772aa0f5c73b86b631779ef1183879"
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
