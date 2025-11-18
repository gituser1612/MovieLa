import React from 'react'
import {Link} from 'react-router-dom'
import './MovieCard.css'
import type { Movie } from "../../types/Movie.tsx";

interface MovieCardProps{
  movie:Movie;
}

const MovieCard:React.FC<MovieCardProps> = ({movie}) => {
  return (
    <div className='movie_card'>
      <Link to={`/movie/${movie.id}`} style={{textDecoration:'none',color:"inherit"}}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
        <div className="description">
            <h2>{movie.original_title}</h2>
            <p className='release_year'>{movie.release_date}</p>
            <span className="rating">{movie.vote_average}</span>
        </div>
      </Link>
    </div>
  )
}

export default MovieCard