import React, { useCallback, useEffect, useState } from 'react'
import MovieList from '../movieListComponent/MovieList'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { SearchBar } from '../searchBarComponent/SearchBar'
import styles from './Home.module.css'
import {
    searchMovies,
    selectLoading,
    setLoading,
} from '../../store/feature/movieSlice'
import { fetchMoviesAsync } from '../../store/feature/movieThunk'

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const loading = useAppSelector((state) => selectLoading(state.moviesState))

    const dispatch = useAppDispatch()
    const reduxMovies = useAppSelector((state) => state.moviesState.movies)
    const filteredMovies = useAppSelector(
        (state) => state.moviesState.filteredMovies
    )

    const handleSearch = useCallback(() => {
        dispatch(setLoading({ loading: true }))

        const timeoutId = setTimeout(() => {
            dispatch(searchMovies({ searchQuery }))
            dispatch(setLoading({ loading: false }))
        }, 1000)

        return () => clearTimeout(timeoutId)
    }, [dispatch, searchQuery])

    useEffect(() => {
        // Dispatch the async thunk to fetch movies and update the store
        dispatch(fetchMoviesAsync())
    }, [dispatch])

    return (
        <div className={styles.homeContainer}>
            <h1 className={styles.header}>Movie List</h1>
            <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                handleSearch={handleSearch}
            />
            <MovieList
                reduxMovies={
                    filteredMovies.length ? filteredMovies : reduxMovies
                }
                loading={loading}
            />
        </div>
    )
}

export default Home
