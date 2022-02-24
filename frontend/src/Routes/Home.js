import React, { Component } from "react";
import MoviesListComponent from "../Components/Movie/MoviesList";
import "./../css/style.css";

class Home extends Component {
    render() {
        return ( <MoviesListComponent /> )
    }
}

export default Home;