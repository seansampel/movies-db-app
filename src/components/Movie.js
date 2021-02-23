import React from "react";

const img_api = "http://image.tmdb.org/t/p/w1280";

const Movie = ({title, poster_path, overview, vote_average}) => <div 
  className="movie">
      <img src={img_api + poster_path} alt={title}/>
  </div>;


export default Movie;