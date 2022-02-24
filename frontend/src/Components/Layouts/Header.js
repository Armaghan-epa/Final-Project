import React, { useState , useEffect } from "react";
import { useLocation } from 'react-router';
import { NavLink } from "react-router-dom";
import collapse from 'bootstrap/js/dist/collapse';
import config from "./../../config.json";
import axios from 'axios';
import "./../../css/search.css";
function Header() {

    const [movies , setMovies] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');
    const [loading,setLoading] = useState(true);
    const [showResult,setshowResult] = useState(false);

    

    useEffect(() => {
        if(searchTerm.replace(/ /g, '') !== ""){
            const delayDebounceFn = setTimeout(() => {
                setLoading(true);
                setMovies([]);
                axios.get(`${config.APP_URL}/search.php?searchquery=${searchTerm?.trim()}`)
                .then((response) => {
        
                    setLoading(false);
                    setshowResult(true);
                    setMovies(response.data.data);
                                
                })
                .catch(err => {setLoading(false);});
        
              }, 750);

              return () => clearTimeout(delayDebounceFn);

        }
        else{
            setLoading(false);
            setMovies([]);
        }
    
    }, [searchTerm])


    const location = useLocation();

    useEffect(() => {
        setshowResult(false);
        setLoading(true);
        setSearchTerm('');
        setMovies([]);
    
    },[location.pathname]);

    const onFocus = (value)=>{
        if(value.replace(/ /g, '') !== ""){
            setshowResult(true);
        }
        
    }

    const onBlur = (value)=>{
        setTimeout(() => {
            setshowResult(false);
            setLoading(false);
            if(value.replace(/ /g, '') === ""){
                setMovies([]);
            }
        }, 150);
    }


   
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                    <div className="container-fluid">
                        <NavLink to="/" className="navbar-brand">عنوان</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">فیلم ها</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/add-movies" className="nav-link">افزودن فیلم</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input 
                                className="form-control me-2" type="search" 
                                onChange={(e) => setSearchTerm(e.target.value)} 
                                onFocus={(e) => onFocus(e.target.value)} 
                                onBlur={(e) => onBlur(e.target.value)} 
                                value={searchTerm}
                                placeholder="جستجو" 
                                aria-label="search"
                            />
                            <div className={`search-result ${showResult ? "d-block" : "d-none"}`} >
                                
                                {
                                    loading ? 
                                    (
                                        <p className="text-center" style={{width:"100%"}}>درحال بارگذاری...</p>    
                                    ) 
                                    : 
                                    (
                                        movies.length > 0 ? 
                                        (
                                            <ul>
                                                {movies.map(movie => (
                                                    <NavLink  key={movie.id} to={`/movie/${movie.id}`} title={`مشاهده جزئیات فیلم ${movie.title}`}>
                                                        <li>
                                                            <img src={movie.poster} alt={movie.title}/>
                                                            <p>
                                                                {movie.title}
                                                                <br/>
                                                                <span className="desc">
                                                                    {movie.description?.slice(0, 40).replace(movie.title,'')}...
                                                                    <br/>
                                                                    سال تولید : {movie.year} 
                                                                </span>
                                                             </p>
                                                        </li>
                                                    </NavLink>
                                                ))}
                                            </ul>
                                        )
                                        : 
                                        (
                                            <p className="text-center" style={{width:"100%"}}>موردی یافت نشد</p>
                                        )
                                    )
                                }
                            
                            </div>
                        </form>
                        </div>
                    </div>
                </nav>
            </header>
        )
}

export default Header;