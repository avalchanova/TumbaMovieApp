import React from 'react'
import { Movie } from '../store/feature/movieSlice'
import { Image } from './Image'

interface MovieCardProps {
  movie: Movie
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div>
      <h2>{movie.titleText.text}</h2>
      <div>
        <Image movie={movie} />
      </div>
      <p>{movie.releaseYear.year}</p>
    </div>
  )
}

export default MovieCard
