import React, {useEffect} from 'react';
import axios from 'axios';
import apiKey from '../config';

function Home(){

    function fetchMovies(){
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
        .then(response => console.log(response))
    }

    useEffect(() => {
        fetchMovies()
    }, []);

    return (
    <header>
        <h1>HOMEPAGE</h1>
    </header>
    )
}

export default Home;