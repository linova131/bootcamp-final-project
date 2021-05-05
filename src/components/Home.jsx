import React, { useEffect, useState, useContext } from "react";
import Context from "../Context";
import MovieContainer from "./MovieContainer";


function Home() {
  const { movieData, fetchMovies, searchResults } = useContext(Context);

  useEffect(() => {
    fetchMovies();
  }, []);


  return (
    <main className="main-content">
      <div className="container">
        <div className="page">
          <div className="row ">
            <div className="col-md-12">
              {movieData.length > 0 ? (
                <MovieContainer data={movieData} />
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </div>
        <p></p>
      <div className="row">
							<div className="col-md-4">
								<h2 className="section-title">May premieres</h2>
								<ul className="movie-schedule">
									{/* <ComingSoon data={comingSoonMovies}></ComingSoon> */}
								</ul>
							</div>
							<div className="col-md-4">
								<h2 className="section-title">June premieres</h2>
								<ul className="movie-schedule">
					
								</ul> 
							</div>
							<div class="col-md-4">
								<h2 class="section-title">July premieres</h2>
								<ul class="movie-schedule">
								
								</ul> 
							</div>
						</div> 
            </div>
    </main>
  );
}

export default Home;
