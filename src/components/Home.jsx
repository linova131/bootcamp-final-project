import React, { useEffect, useContext } from "react";
import Context from "../Context";
import MovieContainer from "./MovieContainer";
import PremiereList from './PremiereList';


function Home() {
  const { movieData, fetchMovies, fetchFutureMovies, futureMovies } = useContext(Context);

  useEffect(() => {
    fetchMovies();
    fetchFutureMovies();
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

      </div>
        {(futureMovies.length>0)
          ? <PremiereList data={futureMovies} />
          : <p>Loading...</p>
        }
            </div>
    </main>
  );
}

export default Home;
