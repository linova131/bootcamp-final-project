import React, { useEffect, useState } from 'react';
import axios from 'axios';
import apiKey from './config';

const Context = React.createContext();

export const ServiceProvider = (props) => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      let response;
      try {
        response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
        );
        setMovieData(response.data.results);
      } catch (err) {
        console.log("There was a problem with the request");
      }
    }
    fetchMovies();
  }, [])

 

  return ( 
    <Context.Provider value={{movieData}}>{props.children}</Context.Provider>
  )
}

export default Context;
