import React from 'react'
import "./MovieCard.css"

function MovieCard({title, rating, year, genre, trailer}) {
    function watchTrailer() {
        window.open(trailer, "_blank");
    }

  return (
    <div className='movie-card'>
      <h2>🎬 {title}</h2>
      <h4>⭐ {rating}</h4>
      <p>📆 {year}</p>
      <p>🎭 {genre}</p>

      <button onClick={watchTrailer}>Watch Trailer</button>
    </div>
  )
}

export default MovieCard

