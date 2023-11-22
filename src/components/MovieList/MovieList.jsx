import "./MovieList.css";
import Fire from "../../assets/fire.png";
import MovieCard from "./MovieCard";
//rfc
import React, { useEffect, useState } from "react";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]); //평점으로 구분
  const [minRating, setMinRating] = useState(0); //최소점수

  async function fetchMovies() {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${
        import.meta.env.VITE_MOVIE_API
      }&language=ko`
    );
    const data = await response.json();
    setMovies(data.results);
    setFilterMovies(data.results);
  }

  //평점구분 함수
  function handleFilter(rate) {
    if (minRating === rate) {
      setMinRating(0); //초기화
      setFilterMovies(movies); //모든영화
    } else {
      setMinRating(rate); //최소점수
      const filtered = movies.filter((movie) => movie.vote_average >= rate); //최소점수이상
      setFilterMovies(filtered);
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <section className="movie_list">
      {/* 무비헤더 */}
      <header className="align_center movie_list_header">
        <h2 className="align_center movie_list_header">
          <img src={Fire} alt="fire emoji" className="navbar_emoji" /> 인기순
        </h2>

        {/* 점수별 */}
        <div className="align_center movie_list_fs">
          <ul className="align_center movie_filter">
            <li
              onClick={() => handleFilter(8)}
              className="movie_filter_item active"
            >
              8+ Star
            </li>
            <li onClick={() => handleFilter(7)} className="movie_filter_item">
              7+ Star
            </li>
            <li onClick={() => handleFilter(6)} className="movie_filter_item">
              6+ Star
            </li>
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
      {/* 무비카드 */}
      <div className="movie_cards">
        {filterMovies.map((movie) => (
          <MovieCard key={movies.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
