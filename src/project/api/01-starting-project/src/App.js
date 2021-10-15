import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() { 
 
  const [movies, setMovies]=useState([])
  const  fetchMovies= async()=>{

    const response = await fetch('https://swapi.dev/api/films/')
    const data=await response.json();
    
      const transformedMovie=data.results.map((movie)=>{
        return{
          id: movie.episode_id,
          releaseDate: movie.release_date,
          title: movie.title,
          openingText: movie.opening_text,
        }
      })
      setMovies(transformedMovie)
    }
  

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
