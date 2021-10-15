import React, { useEffect, useState } from 'react'

import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://ott-details.p.rapidapi.com/getPlatforms',
    params: {region: 'IN'},
    headers: {
      'x-rapidapi-host': 'ott-details.p.rapidapi.com',
      'x-rapidapi-key': '6efc9487ecmsh84eccf0d854d81ep1ad868jsn026cfaf66ed8'
    }
  };

  const API_KEY ='d20af763'
  const selectedMovie='blade runner'

  const imge='https://image.tmdb.org/t/p/w500'
 
const Movies = ({query}) => {

    const [movies,setMovies]=useState([])
    const url=`https://api.themoviedb.org/3/search/movie?api_key=19baee82018eba174bab275798336f59&language=en-US&query=${query}&page=1&include_adult=false`

const fetchurl = async()=>{
  // const result = await fetch(`https://www.omdbapi.com/?s=${selectedMovie}&apikey=${API_KEY}`)
  // const result = await fetch('https://api.themoviedb.org/3/movie/550?api_key=19baee82018eba174bab275798336f59')
  const result = await fetch(url)
  

  const res=await result.json()
  console.log(res);
  setMovies(res.results)
}
    useEffect(() => {
fetchurl()
        
    },[url])
    console.log(movies);
    const movie=movies[0];
    console.log(movie);
    const source=imge+movie.poster_path
    console.log(source);
    return (
        <div>
      {movie&&      <div class="card" style={{width: "80rem"}}>
  <img  src={source} className="card-img-top img-fluid" style={{width: "290px"}}alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{movie.original_title}</h5>
    <p class="card-text">{movie.overview}</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
    <div className="d-flex">
    <p><b>IMBD Rating</b> <br /> 
    ⭐{movie.vote_average} /10
    </p>
    <p className="ms-4"><b>
    Realse Date
    </b>
    <i className="ms-2">{movie.release_date}</i>
      
    </p>
    </div>
  </div>
</div>}
        </div>
    )
}

export default Movies
