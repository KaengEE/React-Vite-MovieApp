import "./MovieCard.css";
import Star from "../../assets/star.png";

import React from "react";

export default function MovieCard() {
  return (
    // 영화 카드
    <a className="movie_card">
      <img
        src="https://t1.daumcdn.net/movie/947a0d62f2772aa0f5c73b86b631779ef1183879"
        alt="movie poster"
        className="movie_poster"
      />

      <div className="movie_details">
        <h3 className="movie_details_heading">플래쉬</h3>
        <div className="align_center movie_date_rate">
          <p>2023-06-14</p>
          <p className="align_center">
            평점
            <img src={Star} alt="rating icon" className="card_emoji" />
          </p>
        </div>
        <p className="movie_description">
          빛보다 빠른 스피드, 물체 투과, 전기 방출, 자체 회복, 천재적인 두뇌까지
          갓벽한 능력을 자랑하지만 존재감은 제로, 저스티스 리그에서 궂은일을
          도맡아 하는 히어로 ‘플래시’. 어느 날
        </p>
      </div>
    </a>
  );
}
