import React, {useContext} from 'react';
import Movie from './Movie';
import Context from '../Context';

function MovieContainer(props) {
  const movieData = useContext(Context);
  // const data = props.data;
  console.log(movieData);
  let movies = [];
  if (movieData) {
    for (let i=0; i<=2; i++) {
      const title = movieData[i].original_title;
      const description = movieData[i].overview;
      const id = movieData[i].id;
  
      function buildMoviePoster(movieData) {
        let filePath = movieData[i].poster_path;
        return `https://image.tmdb.org/t/p/w200/${filePath}`
      };
  
      const poster = buildMoviePoster();
  
      movies.push(<Movie key={id} id={id} title={title} description={description} poster={poster}/>)
    }
  } 
  
  return (
    <React.Fragment>
    {movies}
    </React.Fragment>
  )
};

export default MovieContainer;