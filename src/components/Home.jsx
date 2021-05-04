import React, { useEffect, useState, useContext } from "react";
import Context from "../Context";
import MovieContainer from "./MovieContainer";

function Home() {
  const { movieData, fetchMovies } = useContext(Context);

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <main className="main-content">
      <div className="container">
        <div className="page">
          <div className="row ">
            <div
              className="col-md-12
            "
            >
              {movieData.length > 0 ? (
                <MovieContainer data={movieData} />
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
