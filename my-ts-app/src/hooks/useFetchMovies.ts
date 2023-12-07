import { useCallback, useEffect, useState } from 'react'
import { addMovies } from '../store/feature/movieSlice'
import { baseUrl } from '../constants'
import { useAppDispatch } from '../store/store'

interface FetchMoviesResult {
    loading: boolean
}

export const useFetchMovies = (): FetchMoviesResult => {
    const [loading, setLoading] = useState<boolean>(true)
    const dispatch = useAppDispatch()

    const fetchData = useCallback(async () => {
        try {
            const response = await fetch(`${baseUrl}/titles?limit=50`, {
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
            dispatch(addMovies({ movies: data.results }))
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }, [dispatch])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return { loading }
}
