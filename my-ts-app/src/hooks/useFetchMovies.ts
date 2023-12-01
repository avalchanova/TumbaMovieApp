import { useEffect, useState } from 'react'
import { Movie } from '../store/feature/movieSlice'
import { baseUrl } from '../constants'

interface FetchMoviesResult {
  movies: Movie[] | null
  loading: boolean
  error: Error | null
}

export const useFetchMovies = (): FetchMoviesResult => {
  const [movies, setMovies] = useState<Movie[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  const fetchData = async () => {
    try {
      const response = await fetch(baseUrl, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            '5e31f1947emsh8558cf590198d20p1ab4ebjsn54d652adc14d',
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
        },
      })

      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }

      const data = await response.json()
      setMovies(data.results)
      setLoading(false)
    } catch (error) {
      setError(error instanceof Error ? error : new Error('Unknown error')) // if it is an instance of Error the error will be displayed if not a new error with text unknown error will be displayed
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { movies, loading, error }
}