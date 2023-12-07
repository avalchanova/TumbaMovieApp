import React from 'react'
import { Movie } from '../../store/feature/movieSlice'
import { Image } from '../imageComponent/Image'
import styles from './MovieCard.module.css'
import { cutFirstNChars } from '../../utils/utils'

interface MovieCardProps {
    movie: Movie
}

const MovieCard = ({ movie }: MovieCardProps) => {
    return (
        <div className={styles.movieCard}>
            <p className={styles.title}>
                {cutFirstNChars(movie.titleText.text, 30)}
            </p>
            <div>
                <Image movie={movie} />
            </div>
            <p className={styles.yearText}>{movie.releaseYear.year}</p>
        </div>
    )
}

export default MovieCard
