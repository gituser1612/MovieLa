import React, { useEffect, useState } from "react";
import "./MovieListing.css";
import MovieCard from "../MovieCard/MovieCard";
import SearchBar from "../Navbar/Movie_Search/SearchBar";
import {Movie} from "../../types/Movie";


interface MovieListingProps{
  searchText?:string;
}

const MovieListing: React.FC<MovieListingProps> = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=b3d6dfd7ec12793f1e126c6d58c2f285"
    );
    const data = await response.json();
    setMovies(data.results || []);
  };

  const filteredMovies = movies.filter((movie) => {
    const title =
      movie.original_title ||
      movie.title ||
      movie.original_name ||
      movie.name ||
      "";

    if (!searchText) return true;
    return title.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <div className="movie_listing text-amber-50">
      <h1 className="text-center text-4xl font-semibold text-amber-100">
        Latest Movies
      </h1>
      <hr className="text-amber-50" />

      <div className="search_and_filter">
        <SearchBar setSearchText={setSearchText} />
        <select id="filterDropdown_genre" name="genre">
          <option value="">All genres</option>
          <option value="Action">Action</option>
          <option value="Animation">Animation</option>
          <option value="Comedy">Comedy</option>
          <option value="Romance">Romance</option>
          <option value="Horror">Horror</option>
          <option value="Drama">Drama</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Thriller">Thriller</option>
        </select>
        <select id="sort_dropDown" name="genre">
          <option value="">Sort By</option>
          <option value="Trending">Trending</option>
          <option value="Most Popular">Most Popular</option>
          <option value="Most Recent">Most Recent</option>
          <option value="Most Watched">Most Watched</option>
          <option value="A-Z">A-Z</option>
        </select>
      </div>

      <div className="movie_listing_cards text-amber-50">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieListing;
