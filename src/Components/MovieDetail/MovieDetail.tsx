import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './MovieDetail.css';
import bookmark from '../../assets/bookmark.png';
import favourite from '../../assets/heart.png';
import list from '../../assets/list.png';

interface Genre {
  id: number;
  name: string;
}

interface Movie {
  id: number;
  title: string;
  original_title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  runtime: number;
  overview: string;
  genres?: Genre[];
  adult?: boolean;
}

const MovieDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    fetchMovieDetail();
    checkBookmark();
  }, [id]);

  const fetchMovieDetail = async () => {
    if (!id) return;

    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=b3d6dfd7ec12793f1e126c6d58c2f285`
    );
    const data: Movie = await response.json();
    setMovie(data);
  };

  const checkBookmark = () => {
    const saved = JSON.parse(localStorage.getItem('bookmarks') || '[]') as Movie[];
    const exist = saved.find((item) => item.id === Number(id));
    if (exist) setIsBookmarked(true);
  };

  const handleBookmark = () => {
    if (!movie) return;

    let saved = JSON.parse(localStorage.getItem('bookmarks') || '[]') as Movie[];
    const exists = saved.find((item) => item.id === movie.id);
    if (exists) return;

    saved.push({
      id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      original_title: movie.original_title,
      release_date: movie.release_date,
      vote_average: movie.vote_average,
      vote_count: movie.vote_count,
      runtime: movie.runtime,
      overview: movie.overview,
      genres: movie.genres,
      adult: movie.adult,
    });
    localStorage.setItem('bookmarks', JSON.stringify(saved));
    setIsBookmarked(true);
  };

  if (!movie) return <p>Loading...</p>;

  return (
    <div className='movie_detail'>
      <Link to='/' className='back_btn'>
        <button className='btn'>← Back</button>
      </Link>
      <div className='movie_detail_content'>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <div className='info'>
          <h1>{movie.original_title}</h1>
          <p><strong>Release Date • </strong>{movie.release_date}</p>
          <p><strong>Rating • </strong>{movie.vote_average}/10 ({movie.vote_count})</p>
          <p><strong>Duration • </strong>{movie.runtime}m</p>
          <p className='overview'><strong><span>Overview : </span> </strong>{movie.overview}</p>
          <p>
            <strong>Genres • </strong>
            {movie.genres?.map((g) => g.name).join(', ')}
            {movie.adult && <span className='adult-badge'> • 14+</span>}
          </p>
          <div className='icons'>
            <img
              src={bookmark}
              alt='bookmark_image'
              className={isBookmarked ? 'bookmark-icon active' : 'bookmark-icon'}
              onClick={handleBookmark}
              style={{ cursor: 'pointer' }}
            />
            <img src={favourite} alt='favourite_image' />
            <img src={list} alt='list_image' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
