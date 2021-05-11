import React from "react";
import {Link} from 'react-router-dom'
import List from './List'
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

  function createPreview(movieList) {
    let list = []
    for (let i=0; i<3; i++) {
      list.push(movieList[i])
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
          <List month={months[0]} movies={movies1} preview={createPreview(movies1)} />
					<List month={months[1]} movies={movies2} preview={createPreview(movies2)} />
          <List month={months[2]} movies={movies3} preview={createPreview(movies3)} />		
				</div> 
  </React.Fragment>
  );
}

export default PremiereList;
