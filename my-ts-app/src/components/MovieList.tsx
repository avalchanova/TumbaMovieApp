import React from 'react'
import MovieCard from './MovieCard'
import { Movie } from '../store/feature/movieSlice'

interface MovieListProps {
    movies: Movie[]
}

const MovieList = ({ movies: reduxMovies }: MovieListProps) => {
    return (
        <div>
            <ul>
                {reduxMovies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </ul>
        </div>
    )
}

export default MovieList
