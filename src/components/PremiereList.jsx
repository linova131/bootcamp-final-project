import React from "react";
import {Link} from 'react-router-dom'
const moment = require('moment');
moment().format();

function PremiereList(props) {
  const data = props.data;
  
  let months = []
  for(let i=1; i<4; i++) {
    months.push(moment().startOf("month").add(i, 'M').format("MMMM"))
  }
  
  let movies1 = []
  let movies2 = []
  let movies3 = []
  
  function createList(i) {
    let results = data[i].data.results
    let list = []
    for (let i=0; i<results.length; i++) {
      let movie = <li>
                    <div class="date">{results[i].release_date}</div>
                    <h2 class="entry-title"><Link to={`/movies/${results[i].id}`}>{results[i].title}</Link></h2>
                  </li>
      list.push(movie); 
    }
    return list
  }


  for(let i=0; i<3; i++) {
    (i === 0) ? movies1 = createList(i) :
    (i === 1) ? movies2 = createList(i) :
    movies3 = createList(i)
  }
  
  
  return (  
  <React.Fragment>
        <div className="row">
							<div className="col-md-4">
								<h2 className="section-title">{months[0]} Premieres</h2>
								<ul className="movie-schedule">
                  {movies1}
								</ul>
							</div>
							<div className="col-md-4">
								<h2 className="section-title">{months[1]} Premieres</h2>
								<ul className="movie-schedule">
                  {movies2}
								</ul> 
							</div>
							<div class="col-md-4">
								<h2 class="section-title">{months[2]} Premieres</h2>
								<ul class="movie-schedule">
                  {movies3}
								</ul> 
							</div>
						</div> 
  </React.Fragment>
  );
}

export default PremiereList;
