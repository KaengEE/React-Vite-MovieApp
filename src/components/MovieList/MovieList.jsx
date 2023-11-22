import "./MovieList.css";
import Fire from "../../assets/fire.png";
//rfc
import React from "react";

export default function MovieList() {
  return (
    <section className="movie_list">
      <header className="align_center movie_list_header">
        <h2 className="align_center movie_list_header">
          <img src={Fire} alt="fire emoji" className="navbar_emoji" /> 인기순
        </h2>

        <div className="align_center movie_list_fs">
          <ul className="align_center movie_filter">
            <li className="movie_filter_item active">8+ Star</li>
            <li className="movie_filter_item">7+ Star</li>
            <li className="movie_filter_item">6+ Star</li>
          </ul>

          <select name="" id="" className="movie_sorting">
            <option value="">SortBy</option>
            <option value="">날짜순</option>
            <option value="">평점순</option>
          </select>
          <select name="" id="" className="movie_sorting">
            <option value="">오름차순</option>
            <option value="">내림차순</option>
          </select>
        </div>
      </header>

      <div className="movie_cards"></div>
    </section>
  );
}
