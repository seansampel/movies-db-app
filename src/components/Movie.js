import React from "react";
import "../index.css"

const img_api = "http://image.tmdb.org/t/p/w1280";

const Movie = ({title, poster_path, overview, vote_average}) => (
<div 
  className="movie">
      <img src={img_api + poster_path} alt={title}/>
      <div className="movie-info">
        <h3>{title}</h3>
        <span>{vote_average}</span>
      </div>
  </div>
);

export default Movie;