import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";

// import './App.css';

const featured_api = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=538c1b13429dd7c0a8f46ea856abe92b";

const search_api = "https://api.themoviedb.org/3/search/movie/?&api_key=538c1b13429dd7c0a8f46ea856abe92b";

function App() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(async () => {
      fetch(featured_api)
      .then(res => res.json())
      .then((data) => {
        setMovies(data.results);
      });
      
    }, []);

  const handleOnSubmit = (e) => { 
      e.preventDefault();

      if(searchTerm) {
        fetch(search_api + searchTerm)
        .then(res => res.json())
        .then((data) => {
          setMovies(data.results);
        });
        setSearchTerm('');
    }
  };

  const handleOnChange = (e) => {
      setSearchTerm(e.target.value);
    };

  return (
    <div>   
      <header>
        <form onSubmit={handleOnSubmit}>
          <input
                className="search" 
                type="search" 
                placeholder="Search..."
                value={searchTerm}
                onChange={handleOnChange}
          />
        </form>
      </header>
    <div className="movie-container">
      {movies.length > 0 && 
              movies.map((movie) => (
          <Movie key={movie.id} {...movie} />))}
    </div>
  </div>
  );  
}
 

export default App;
