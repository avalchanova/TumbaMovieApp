import React from 'react'
import MovieList from './MovieList'
import { useFetchMovies } from '../hooks/useFetchMovies'
import { useAppSelector } from '../store/store'
import { useSearchMovies } from '../hooks/useSearchMovies'

const Home = () => {
    const { loading, error } = useFetchMovies()
    const reduxMovies = useAppSelector((state) => state.moviesState.movies)
    const { searchQuery, setSearchQuery, filteredMovies, handleSearch } =
        useSearchMovies(reduxMovies)

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        console.log(error)
        return <div>No movies in DB</div>
    }

    if (!reduxMovies) {
        return null
    }

    console.log(reduxMovies)

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
                reduxMovies && <MovieList movies={reduxMovies} />
            )}
        </div>
    )
}

export default Home
