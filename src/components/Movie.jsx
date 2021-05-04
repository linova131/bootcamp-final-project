import React from 'react';
import {Link} from 'react-router-dom';

function Movie(props) {

  return (
    <React.Fragment>
    <Link key={props.id} to={`/movies/${props.id}`}>
      <img src={props.poster}></img>
    </Link>
    <h1>{props.title}</h1>
    <p>{props.description}</p>
    </React.Fragment> 
   )
}
 
export default Movie;
