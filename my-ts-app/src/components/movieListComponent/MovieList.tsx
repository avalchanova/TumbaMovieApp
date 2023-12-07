import React from 'react'
import MovieCard from '../movieCardComponent/MovieCard'
import { Movie } from '../../store/feature/movieSlice'
import styles from './MovieList.module.css'

interface MovieListProps {
    movies: Movie[]
}

const MovieList = ({ movies: reduxMovies }: MovieListProps) => {
    return (
        <div className={styles.movieListContainer}>
            {reduxMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    )
}

export default MovieList
