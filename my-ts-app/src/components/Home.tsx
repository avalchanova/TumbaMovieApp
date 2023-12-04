import React from 'react'
import MovieList from './MovieList'
import { useFetchMovies } from '../hooks/useFetchMovies'

const Home = () => {
    const { movies, loading, error } = useFetchMovies()

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        console.log(error)
        return <div>No movies in DB</div>
    }

    return (
        <div className='home'>
            <h1>Movie List</h1>
            {movies && <MovieList movies={movies} />}
        </div>
    )
}

export default Home
