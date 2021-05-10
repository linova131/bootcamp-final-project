import React from "react";
import {Link} from 'react-router-dom'

function SearchResults(props) {
  const data = props.data;
  let movies = [];

  for (let i = 0; i < 9; i++) {
    const title = data[i].original_title;
    const id = data[i].id;

    function buildMoviePoster(movieData) {
      let filePath = data[i].poster_path;
      return `https://image.tmdb.org/t/p/w200/${filePath}`;
    }

    const poster = buildMoviePoster();

    movies.push(
        <Link key={id} to={`/movies/${id}`}>
          <ul className="slides list-unstyled">
            <li className="col-sm-6 col-md-4">
              <img src={poster} className="img-thumbnail" alt={title}></img>
              <h6>{title}</h6>
            </li>
          </ul>
        </Link>
    );
  }





  return (  
  <React.Fragment>
    {movies}
  </React.Fragment>
  );
}

export default SearchResults;
