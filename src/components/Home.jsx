import React, {useEffect, useState} from 'react';
import axios from 'axios';
import apiKey from '../config';
import MovieContainer from './MovieContainer';

function Home(){

    const [movieData, setMovieData] = useState([]);

    async function fetchMovies(){
        await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
        .then(response => setMovieData(response.data.results))
    }

    useEffect(() => {
        fetchMovies();
    }, []);
    console.log(movieData);
    return (
    <header>
        <h1>JJSMHL Movie Site</h1>
        <MovieContainer data={movieData} />
    </header>
    )
}

export default Home;