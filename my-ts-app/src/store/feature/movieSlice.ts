import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { fetchMoviesAsync } from './movieThunk'

export interface Movie {
    _id: string
    id: string
    primaryImage: {
        id: string
        width: number
        height: number
        url: string
        caption: {
            plainText: string
            __typename: string
        }
        __typename: string
    }
    titleType: {
        text: string
        id: string
        isSeries: boolean
        isEpisode: boolean
        __typename: string
    }
    titleText: {
        text: string
        __typename: string
    }
    originalTitleText: {
        text: string
        __typename: string
    }
    releaseYear: {
        year: number
        endYear: null | number
        __typename: string
        releaseDate: null | number
    }
}

interface MovieState {
    movies: Movie[]
    filteredMovies: Movie[]
    loading: boolean
}

const initialState: MovieState = {
    movies: [],
    filteredMovies: [],
    loading: true,
}

export const MovieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<{ loading: boolean }>) => {
            state.loading = action.payload.loading
        },
        searchMovies: (
            state,
            action: PayloadAction<{ searchQuery: string }>
        ) => {
            const searchQuery = action.payload.searchQuery.toLowerCase()

            state.filteredMovies = state.movies.filter((movie) =>
                movie.titleText.text.toLowerCase().includes(searchQuery)
            )
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMoviesAsync.fulfilled, (state, action) => {
            state.movies = action.payload
            state.loading = false
        })
    },
})
export const selectFilteredMovies = (state: MovieState) => state.filteredMovies
export const selectLoading = (state: MovieState) => state.loading

export default MovieSlice.reducer
export const { setLoading, searchMovies } = MovieSlice.actions
