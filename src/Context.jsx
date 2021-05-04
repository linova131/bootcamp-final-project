import React, { useState } from 'react';
import axios from 'axios';
import apiKey from './config';

const Context = React.createContext();

export const ServiceProvider = (props) => {
  const [movieData, setMovieData] = useState([]);
  const [searchResults, setSearchResults] = useState([])

  async function fetchMovies(){
      await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
      .then(response => setMovieData(response.data.results))
  }

  async function performSearch(query){
    await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`)
     .then((response) => {
      console.log('response',response.data.results) 
      setSearchResults(response.data.results)
      })
     .then(console.log(searchResults))

  }

  return ( 
    <Context.Provider value={{movieData, fetchMovies, performSearch, searchResults}}>{props.children}</Context.Provider>
  )
}

export default Context;