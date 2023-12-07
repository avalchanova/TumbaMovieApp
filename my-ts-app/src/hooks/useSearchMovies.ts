import { useCallback, useState } from 'react'
import { Movie } from '../store/feature/movieSlice'

interface UseSearchFilterProps {
    movies: Movie[]
    searchQuery: string
    setLoading: React.Dispatch<boolean>
}

export const useSearchMovies = ({
    movies,
    searchQuery,
    setLoading,
}: UseSearchFilterProps) => {
    const [filteredMovies, setFilteredMovies] = useState<Movie[]>([])

    const handleSearch = useCallback(() => {
        setLoading(true)

        const timeoutId = setTimeout(() => {
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
            setLoading(false)
        }, 1000)

        return () => clearTimeout(timeoutId)
    }, [movies, searchQuery, setLoading])

    return {
        searchQuery,
        filteredMovies,
        handleSearch,
    }
}
