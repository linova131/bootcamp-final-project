import React, { useState } from 'react';
import axios from 'axios';
import apiKey from './config';
const moment = require('moment');
moment().format();

const Context = React.createContext();

export const ServiceProvider = (props) => {
  const [movieData, setMovieData] = useState([]);
  const [searchResults, setSearchResults] = useState([])
  const [futureMovies, setFutureMovies] = useState([])

  async function fetchMovies(){
      await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
      .then(response => setMovieData(response.data.results))
  }

  async function performSearch(query){
    await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`)
     .then((response) => {
      setSearchResults(response.data.results)
      })
  }

  async function fetchFutureMovies(year, month, gte, lte){
    let dates = [];
    for(let i=1; i<4; i++) {
      let individualDate = []
      individualDate.push(moment().startOf("month").add(i, 'M').format("MM"))
      individualDate.push(moment().add(i, 'M').endOf("month").format("DD"))
      individualDate.push(moment().startOf("month").add(i, 'M').format("YYYY"))
      dates.push(individualDate)  
    }

    let promises = [];
    for(let i=0; i<3; i++) {
      const month = dates[i][0]
      const firstDay = "01"
      const lastDay = dates[i][1]
      const year = dates[i][2]
      promises.push(axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&primary_release_year=${year}&primary_release_date.gte=${year}-${month}-${firstDay}&primary_release_date.lte=${year}-${month}-${lastDay}&with_watch_monetization_types=flatrate`))
    }

    Promise.all(promises)
      .then(responses => setFutureMovies(responses))    
  }

  return ( 
    <Context.Provider value={{movieData, fetchMovies, performSearch, searchResults, fetchFutureMovies, futureMovies}}>{props.children}</Context.Provider>
  )
}

export default Context;