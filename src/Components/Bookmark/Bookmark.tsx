import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Bookmark.css';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

const Bookmark: React.FC = () => {
  const [bookmarks, setBookmarks] = useState<Movie[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bookmarks") || "[]") as Movie[];
    setBookmarks(saved);
  }, []);

  return (
    <div className="bookmark-page">
      <h1 className='bookmark-title'>Your Bookmarks</h1>

      <div className="bookmark-list">
        {bookmarks.length === 0 && <p>No bookmarks yet.</p>}

        {bookmarks.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`} className="bookmark-card">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <p>{movie.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Bookmark;
