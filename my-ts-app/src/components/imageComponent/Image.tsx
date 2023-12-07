import React from 'react'
import { Movie } from '../../store/feature/movieSlice'
import noImage from '../../assets/noImage.jpeg'
import styles from './Image.module.css'

interface ImageProps {
    movie: Movie
}

export const Image = ({ movie }: ImageProps) => {
    return (
        <>
            {!movie.primaryImage && (
                <img
                    className={styles.movieImage}
                    src={noImage}
                    alt={'Not available'}
                />
            )}
            {movie.primaryImage && (
                <img
                    src={movie.primaryImage.url}
                    alt={movie.titleText.text}
                    className={styles.movieImage}
                />
            )}
        </>
    )
}
