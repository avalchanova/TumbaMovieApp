import React, { useState } from 'react'
import MovieList from './MovieList'
import { useFetchMovies } from '../hooks/useFetchMovies'
import { Movie } from '../store/feature/movieSlice'

const Home = () => {
    const { movies, loading, error } = useFetchMovies()
    const [searchQuery, setSearchQuery] = useState('')
    const [filteredMovies, setFilteredMovies] = useState<Movie[]>([])
    // <Movie[]> provides type information for the array elements,
    // and([]) initializes the state with an empty array of Movie objects

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        console.log(error)
        return <div>No movies in DB</div>
    }

    if (!movies) {
        return null
    }

    const handleSearch = () => {
        const filtered = movies.filter((movie) =>
            movie.titleText.text
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
        )
        setFilteredMovies(filtered)
    }

    return (
        <div className='home'>
            <h1>Movie List</h1>
            <input
                type='search'
                id='movie-search'
                name='movie-search'
                placeholder='Search for a movie'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className='' onClick={handleSearch}>
                🔍
            </button>

            {searchQuery ? (
                <MovieList movies={filteredMovies} />
            ) : (
                movies && <MovieList movies={movies} />
            )}
        </div>
    )
}

export default Home
