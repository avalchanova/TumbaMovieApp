import React from 'react'
import MovieCard from '../movieCardComponent/MovieCard'
import { Movie } from '../../store/feature/movieSlice'
import styles from './MovieList.module.css'
import { Loading } from '../loadingComponent/Loading'

interface MovieListProps {
    reduxMovies: Movie[]
    loading: boolean
}

const MovieList = ({ reduxMovies, loading }: MovieListProps) => {
    if (loading) {
        return <Loading />
    }
    return (
        <div className={styles.movieListContainer}>
            {reduxMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    )
}

export default MovieList
