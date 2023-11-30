import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Movie.module.css';

const Movie = (movie) => {
    return (
        <div>
            <Link className={styles.movie} to={`/${movie.id}`}>{movie.titleText.text}</Link>
        </div>
    );
};

export default Movie;