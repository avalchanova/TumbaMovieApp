import { configureStore } from '@reduxjs/toolkit'
// configureStore: a function that simplifies the process of creating a Redux store with middleware and additional configurations
import { MovieSlice } from './feature/movieSlice'
// contains the reducer and action creators related to movies
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// hooks from react-redux for typing and accessing the Redux store in a React component

// configureStore is used to create the Redux store, it takes an object with a reducer property
// where I specified the reducers for different parts of the state
// in this case, it includes the moviesState reducer from the MovieSlice
export const store = configureStore({
    reducer: {
        moviesState: MovieSlice.reducer,
    },
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch
// this is a custom hook that provides a typed version of dispatch from the Redux store
// it is exported to be used in React components for dispatching actions.
export const useAppSelector: TypedUseSelectorHook<
    ReturnType<typeof store.getState>
> = useSelector
// a custom hook that provides a typed version of useSelector from react-redux
// it is exported to be used in React components for selecting and accessing slices of the Redux state.

// вкарваме данни с Dispatch
// изкарваме данни със Selector
// store.ts is a little bit like App.tsx
