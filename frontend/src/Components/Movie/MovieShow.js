import React, { useState , useEffect } from "react";
import { Routes, Route, Outlet ,useParams, NavLink } from "react-router-dom";
import config from "./../../config.json";
import axios from 'axios';

function MovieShow() {
    let params = useParams();
    // return <h1>Movie {params.id}</h1>;

    const [movie , setMovie] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
      setLoading(true);
      axios.get(`${config.APP_URL}/read_by_id.php?id=${params.id}`)
          .then((response) => {
  
              setLoading(false);
      
              setMovie(response.data);
                          
          })
          .catch(err => {});
      },[params.id])


    return (
      <>
         <div className="container">
           <div className="row">
            <nav style={{bsBreadcrumbDivider: '>'}} aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><NavLink to="/" className="nav-link d-inline">فیلم ها</NavLink></li>
                <li className="breadcrumb-item active" aria-current="page">{movie.title}</li>
              </ol>
            </nav>
           </div>
           <div className="row justify-content-center">
             <div className="col-8 text-center">
              <div className="card mb-3">
                <img src={movie.poster} className="card-img-top" alt={`${movie.title} ${movie.year}`}/>
              
                  <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">{movie.description}</p>
                    <p className="card-text"><small className="text-muted">سال تولید : <b>{movie.year}</b></small></p>
                  </div>
                </div>
             </div>
           </div>
          </div>
      </>
    )
  }

  export default MovieShow;