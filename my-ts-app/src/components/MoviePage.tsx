import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const baseUrl = 'https://moviesdatabase.p.rapidapi.com/titles'
const MoviePage = () => {
  const { movieId } = useParams() // from the URL
  const [movie, setMovie] = useState(undefined)
  useEffect(() => {
    fetch(`${baseUrl}/${movieId}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '5e31f1947emsh8558cf590198d20p1ab4ebjsn54d652adc14d',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results)
        setMovie(data.results)
      })
      .catch((err) => console.error(err))
  }, [movieId])

  return (
    <div className='moviePage'>
      <h1>Movie Page</h1>
      {/* {movie && <h2>{movie.originalTitleText}</h2>} */}
    </div>
  )
}

export default MoviePage
