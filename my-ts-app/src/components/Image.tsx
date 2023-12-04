import React from 'react'
import { Movie } from '../store/feature/movieSlice'
import noImage from '../assets/noImage.jpeg'

interface ImageProps {
    movie: Movie
}

export const Image = ({ movie }: ImageProps) => {
    if (!movie.primaryImage) {
        return <img src={noImage} alt={'Not available'} />
    }

    return <img src={movie.primaryImage.url} alt={movie.titleText.text} />
}
