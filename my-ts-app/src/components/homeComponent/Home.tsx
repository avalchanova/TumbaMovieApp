import React, { useEffect, useState } from 'react'
import MovieList from '../movieListComponent/MovieList'
import { useFetchMovies } from '../../hooks/useFetchMovies'
import { useAppSelector } from '../../store/store'
import { useSearchMovies } from '../../hooks/useSearchMovies'
import { Loading } from '../loadingComponent/Loading'
import { SearchBar } from '../searchBarComponent/SearchBar'
import styles from './Home.module.css'

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [loading, setLoading] = useState(false)
    const { loading: fetchLoading } = useFetchMovies()
    const reduxMovies = useAppSelector((state) => state.moviesState.movies)
    const { filteredMovies, handleSearch } = useSearchMovies({
        movies: reduxMovies,
        searchQuery,
        setLoading,
    })

    useEffect(() => {
        setLoading(fetchLoading)
    }, [fetchLoading])

    return (
        <div className={styles.homeContainer}>
            <h1 className={styles.header}>Movie List</h1>
            <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                handleSearch={handleSearch}
            />
            {loading && <Loading />}
            <MovieList
                movies={filteredMovies.length ? filteredMovies : reduxMovies}
            />
        </div>
    )
}

export default Home
