import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import apiKey from '../config';
import axios from 'axios';

function MovieDetail() {
  const params = useParams();
  const id = params.id;
  
  //Title, overview, run time, rating, directors, actors, reviews(2)
  const [title, setTitle] = useState('');
  const [poster, setPoster] = useState('');
  const [overview, setOverview] = useState('');
  const [runtime, setRuntime] = useState(0);
  const [rating, setRating] = useState(0);
  const [directors, setDirectors] = useState([]);
  const [actors, setActors] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US&append_to_response=credits`)
      .then((response) => {
        setTitle(response.data.title)
        let filePath = response.data.poster_path
        setPoster(`https://image.tmdb.org/t/p/w500/${filePath}`)
        setOverview(response.data.overview)
        setRuntime(response.data.runtime)
        setRating(response.data.vote_average)
        
        const actorData = response.data.credits.cast;
        if (actorData.length > 0) {
          let names = [];
          for (let i=0; i<actorData.length; i++) {
            names.push(actorData[i].name)
          }
          names = names.join(', ')
          setActors(names)
        }
        
        const crewData = response.data.credits.crew;
        let directorNames = [];
        for (let x=0; x<crewData.length; x++) {
          if (crewData[x].job === "Director") {
            directorNames.push(crewData[x].name);
          }
        }
        directorNames = directorNames.join(', ')
        setDirectors(directorNames)
        
      })

    axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${apiKey}&language=en-US&page=1`)
      .then((response) => {
        let reviewData = response.data.results;
        if (reviewData) {
          let reviewList = [];
          for (let i=0; i<reviewData.length; i++) {
            reviewList.push(reviewData[i].content);  
          }
          setReviews(reviewList)
      }
      })
  }, [id])

  return (
    <main className="main-content">
      <div className="container">
        <div className="page">
          <div class="breadcrumbs">
            <a href="/">Home</a>
						<a href="/">Movie Review</a>
						<span>{title}</span>
          </div>
          <div className="content">
            <div className="row">
              <div className="col-md-6">
                <figure class="movie-poster">
                  <img src={poster} alt={title}></img>
                </figure>
              </div>

              <div className="col-md-6">
                
                <h2 className="movie-title">{title}</h2>
                <div className="movie-summary">
                  <p>{overview}</p>
                </div>
                <ul className="movie-meta">
                  <li><strong>Rating:</strong> {rating}</li>
                  <li><strong>Length:</strong> {runtime}</li>
                  <li><strong>Premiere:</strong> </li>
                  <li><strong>Category:</strong> </li>
                </ul>
                <ul className="starring">
                  <li><strong>Directors:</strong> {directors}</li>
                  <li><strong>Starring:</strong> {actors}</li>
                </ul>
              
              </div>

              <div>

              </div>

              <div class="entry-content">
                <h4>Reviews</h4>
                    { (reviews.length > 0)
                      ?           
                        <>
                          <p>{reviews[0]}</p>
                          {(reviews[1])
                            ? <p>{reviews[1]}</p>
                            : <></>
                          }
                        </>
                      :
                      <p>Sorry, it looks like there are no reviews yet.</p>
                    }
              </div>

            </div>
           
          </div>
        </div>
      </div>
    </main>
  )
};

export default MovieDetail;
