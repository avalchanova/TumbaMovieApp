import { configureStore } from '@reduxjs/toolkit'
import { MovieSlice } from './feature/movieSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const store = configureStore({
    reducer: {
        moviesState: MovieSlice.reducer,
    },
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<
    ReturnType<typeof store.getState>
> = useSelector
