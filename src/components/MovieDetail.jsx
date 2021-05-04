import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import apiKey from '../config';
import axios from 'axios';

function MovieDetail() {
  const params = useParams();
  const id = params.id;
  
  //Title, overview, run time, rating, directors, actors, reviews(2)
  const [title, setTitle] = useState('');
  const [overview, setOverview] = useState('');
  const [runtime, setRuntime] = useState(0);
  const [rating, setRating] = useState(0);
  const [directors, setDirectors] = useState([]);
  const [actors, setActors] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US&append_to_response=credits`)
      .then((response) => {
        console.log(response)
        setTitle(response.data.title)
        setOverview(response.data.overview)
        setRuntime(response.data.runtime)
        setRating(response.data.vote_average)
        const actorData = response.data.credits.cast;
        let names = [];
        for (let i=0; i<=2; i++) {
          names.push(actorData[i].name)
        }
        setActors(names)
        })

    axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${apiKey}&language=en-US&page=1`)
      .then((response) => {
        console.log(response.data)
        setReviews(response.data.results)
      })
  }, [id])

  return (
    <main className="main-content">
      <div className="container">
        <div className="page">
          
          <div className="content">
            <div className="row">
              <div className="col-md-6">
                <h2 className="movie-title">{title}</h2>
                <div className="movie-summary">
                   <p>{overview}</p>
                </div>
                
                <ul className="movie-meta">
                  <li><strong>Rating:</strong><span> {rating}</span></li>
                  <li><strong>Length:</strong> {runtime} minutes</li>
                </ul>

                <ul className="starring">
                  <li><strong>Directors: </strong></li>
                  <li><strong>Stars: </strong>{actors}</li>
                </ul>


              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
};

export default MovieDetail;
