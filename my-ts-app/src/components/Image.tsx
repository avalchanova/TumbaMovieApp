import React from 'react'
import { Movie } from '../store/feature/movieSlice'
import noImage from '../assets/noImage.jpeg'
import styles from './Image.module.css'

interface ImageProps {
    movie: Movie
}

export const Image = ({ movie }: ImageProps) => {
    if (!movie.primaryImage) {
        return (
            <img
                className={styles.movieImage}
                src={noImage}
                alt={'Not available'}
            />
        )
    }

    return <img src={movie.primaryImage.url} alt={movie.titleText.text} />
}
