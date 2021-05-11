import React, {useState} from "react";

function List(props) {
  const month = props.month
  const movies = props.movies
  const preview = props.preview
  const [showAll, setShowAll] = useState(false);

  return (  
  <React.Fragment>
							<div className="col-md-4">
								<h2 className="section-title">{month} Premieres</h2>
								<ul className="movie-schedule">
                  {(showAll) ? movies : null}

                  {(!showAll) ? preview : null}
								</ul>
                <button onClick={()=>setShowAll(!showAll)}>{showAll ? 'Show Less' : 'Show More'}</button>
							</div>					
  </React.Fragment>
  );
}

export default List;
