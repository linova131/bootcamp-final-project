import React, {useEffect, useState, useContext} from 'react';
import Context from '../Context';
import MovieContainer from './MovieContainer';

function Home(){
    const {movieData, fetchMovies} = useContext(Context);

    useEffect(() => {
        fetchMovies();
        console.log(movieData)
    }, []);

    return (
        <main className="main-content">
        <div className="container">
          <div className="page">
            
            <div className="content">
              <div className="row">
                <div className="col-md-6">
                 {
                   (movieData.length > 0)
                   ? <MovieContainer data={movieData} />
                   : <p>Loading...</p>
                 } 
                {/* <MovieContainer data={movieData} /> */}
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
}

export default Home;