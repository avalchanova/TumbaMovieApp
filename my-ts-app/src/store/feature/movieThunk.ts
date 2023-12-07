import { createAsyncThunk } from '@reduxjs/toolkit'
import { baseUrl } from '../../constants'

export const fetchMoviesAsync = createAsyncThunk(
    'movie/fetchMovies',
    async (_, { dispatch, rejectWithValue }) => {
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
            return data.results
        } catch (error) {
            console.error(error)
            return rejectWithValue('Failed to fetch movies')
        }
    }
)
