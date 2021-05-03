import React, {useEffect, useState, useContext} from 'react';
import Context from '../Context';
import MovieContainer from './MovieContainer';

function Home(){
    const {movieData, fetchMovies} = useContext(Context);

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
    <header>
        <MovieContainer data={movieData} />
    </header>
    )
}

export default Home;
