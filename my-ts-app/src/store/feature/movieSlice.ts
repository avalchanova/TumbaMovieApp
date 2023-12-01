import { PayloadAction, createSlice } from '@reduxjs/toolkit'

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
}

const initialState: MovieState = {
  movies: [],
}

export const MovieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    addMovies: (state, action: PayloadAction<{ movies: Movie[] }>) => {
      state.movies.push(...action.payload.movies)
    },
  },
})

export default MovieSlice.reducer
export const { addMovies } = MovieSlice.actions
