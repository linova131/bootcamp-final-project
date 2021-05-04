import React, { useState } from 'react';
import axios from 'axios';
import apiKey from './config';

const Context = React.createContext();

export const ServiceProvider = (props) => {
  const [movieData, setMovieData] = useState([]);

  async function fetchMovies(){
      await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
      .then(response => setMovieData(response.data.results))
  }

  return ( 
    <Context.Provider value={{movieData, fetchMovies}}>{props.children}</Context.Provider>
  )
}

export default Context;