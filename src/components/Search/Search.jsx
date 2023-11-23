import MovieCard from "../MovieList/MovieCard";
import "./Search.css";

import React, { useState } from "react";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState(""); // 검색어
  const [searchResults, setSearchResults] = useState([]); // 검색 결과

  async function SearchMovie() {
    console.log(searchTerm);
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=${
        import.meta.env.VITE_MOVIE_API
      }&language=ko`
    );
    const data = await response.json();
    // 검색 결과 저장
    setSearchResults(data.results);
  }

  //console.log(searchTerm);
  return (
    <div className="search_box">
      <input
        className="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="영화검색..."
      />
      <button onClick={SearchMovie}>검색</button>

      <div>
        <p className="search_term">'{searchTerm}'로 검색한 결과입니다.</p>
      </div>
      {/* 검색된 영화 카드들 */}
      <div className="movie_cards">
        {searchResults.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
