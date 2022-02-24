import React, { Component } from "react";
import config from "./../config.json";
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";

// Import Components
import Header from './Layouts/Header';

// imports Routes
import Home from '../Routes/Home';
import AddMovie from '../Routes/AddMovie';
import NotFound from '../Routes/NotFound';
import Movie from '../Routes/Movie';

class App extends Component{
    render() {
        return (
            <BrowserRouter  basename={config.ROUTER_HOME}>
            <div className="App">
                <Header />
                <main>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/movie/:id" element={<Movie />} />
                    <Route path="/add-movies" element={<AddMovie />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                </main>
            </div>
            </BrowserRouter>    
        )
    }
}

export default App;