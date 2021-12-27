import React, { useState, useEffect } from 'react'
import axios from './axios';
import YouTube from "react-youtube";
import './Row.css';

const baseURL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  // Code which runs based on a specific condition/variable
  useEffect(() => {
    // if [], run once when the row loads, and don't run again
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results)
      return request;
    };
    fetchData();
  }, [fetchURL]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {

      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    }
  }

  return (
    <div className="movie_row">
      <h2>{title}</h2>
      <div className="movie_posters">
        {movies.map(movie => (
          <img 
          key={movie.id}
          className={`movie_poster ${isLargeRow && "movie_posterLarge"}`}
          src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl}  opts={opts} />}
    </div> 
  )
}

export default Row;
