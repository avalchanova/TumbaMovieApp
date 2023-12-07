import { useState } from 'react'
import { Movie } from '../store/feature/movieSlice'

export const useSearchMovies = (movies: Movie[]) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [filteredMovies, setFilteredMovies] = useState<Movie[]>([])

    const handleSearch = () => {
        const filtered = movies.filter((movie) =>
            movie.titleText.text
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
        )
        if (filtered.length === 0) {
            setFilteredMovies([])
            console.log('no match was found')
        }
        setFilteredMovies(filtered)
    }
    return {
        searchQuery,
        setSearchQuery,
        filteredMovies,
        handleSearch,
    }
}
