import React, { useEffect, useState } from 'react';
import axios from './axios';
import requests from './requests';

function Banner() {
  const [movie,setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1 )
        ]);
        return request;
    }
    fetchData();
  }, []);
  
  return (
    <header className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center"
      }}
    >
      <div className="banner_contents">
        {/* Title */}
        <h1>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/* div with 2 button */}
        {/* Description */}
      </div>
    </header>
  )
}

export default Banner
