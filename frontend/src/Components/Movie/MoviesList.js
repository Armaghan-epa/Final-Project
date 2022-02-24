import React, { useState , useEffect } from "react";
import { NavLink } from "react-router-dom";
import config from "./../../config.json";
import axios from 'axios';
import "./../../css/style.css";

function MoviesList(){

    const [listView,setListView] = useState("grid");
    const [movies , setMovies] = useState([]);
    const [loading,setLoading] = useState(true);
    

    const toggleView = (viewMode) => {
        setListView(viewMode);
      };

    //   useEffect(() => {
    //     const fetchData = async () => {
    //       const res = await fetch(
    //         `${config.APP_URL}/read.php`,
    //       );
    //       const json = await res.json();
    //       setMovies(json.data);
    //     };
    //     fetchData();
    //   }, [setMovies]);

    useEffect(() => {
        setLoading(true);
        axios.get(`${config.APP_URL}/read.php`)
            .then((response) => {
    
                setLoading(false);
        
                setMovies(response.data.data);
                            
            })
            .catch(err => { setLoading(false); });
    },[])

      return (
        <>
           <div className="container">
                
                {
                    movies?.length > 0 ? (
                        <div className="well well-sm mb-3">
                            <strong>حالت نمایش</strong>
                            <div className="btn-group">
                                <span className="btn btn-default btn-sm" onClick={()=>toggleView('grid')}>
                                    <i className={`bi bi-grid-3x3 ${listView === 'grid' ? "text-info" : ""}`} title="جدول"></i>
                                </span>

                                <span className="btn btn-default btn-sm" onClick={()=>toggleView('list')}>
                                    <i className={`bi bi-list ${listView === 'list' ? "text-info" : ""}`} title="لیست"></i>
                                </span> 
                            </div>
                        </div>
                    ) : ("")
                }
                
                <div className="row">

                {
                    movies?.length > 0 ? (movies.map(movie => (
                            
                        <div key={movie.id} className={`item col-6 col-md-4 col-xs-4 col-lg-3 ${listView === 'list' ? "list-group-item" : "grid-group-item"}`}>
                        <div className={`card ${listView === 'list' ? "flex-row" : ""}`}>
                            <NavLink to={`/movie/${movie.id}`} className="text-center">
                                <img className="group list-group-image img-thumbnail rounded p-0" src={movie.poster} alt={`${movie.title} ${movie.year}`} />
                            </NavLink>
                            
                            <div className="card-body description">
                                <h5 className={`card-title title ${listView === 'list' ? "" : "text-center"}`}>{movie.title}</h5>
                                <p className="card-text">
                                    {
                                        listView === 'list' ? (
                                            movie.description?.slice(0, 400).replace('...','')+"..."
                                        ) : ("")
                                    }
                                </p>
                                <div className={`badge bg-secondary text-wrap mt-3 ${listView === 'list' ? "float-start" : "float-end"}`}>
                                   تولید :  {movie.year}
                                </div>
                                <NavLink to={`/movie/${movie.id}`} className={`btn btn-primary ${listView === 'list' ? "float-end" : ""}`}>جزئیات</NavLink>
                            </div>
                        </div>
                    </div>
                    ))) : loading === false ? 
                    (
                        <div className="alert alert-danger" role="alert">
                            هیچ فیلمی یافت نشد
                        </div>
                    ) 
                    : 
                    (
                        <div className="alert alert-secondary" role="alert">
                        در حال بارگذاری
                        </div>
                    )
                }
                

                </div>
            </div>
        </>
    )
}

export default MoviesList;