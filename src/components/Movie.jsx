import React from 'react';

function Movie(props) {
  return (
    <React.Fragment>
    <img src={props.poster}></img>
    <h1>{props.title}</h1>
    <h3>{props.description}</h3>
    </React.Fragment> 
   )
}
 
export default Movie;