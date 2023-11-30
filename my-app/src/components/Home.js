import React, { useEffect, useState } from 'react';
import Movie from './Movie.js';

const baseUrl = 'https://moviesdatabase.p.rapidapi.com/titles';

const Home = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch(baseUrl, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '5e31f1947emsh8558cf590198d20p1ab4ebjsn54d652adc14d',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            },
        })
            .then(response => response.json())
            .then(response =>
                setMovies(response.results))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>Movie List</h1>
            <ul>
                {movies.map(x => <Movie key={x.id} {...x} />)}
            </ul>
        </div>
    );
};

export default Home;
