import React from "react"
import './index.css'

function MovieContainer({ source, title }) {
    return (
        <li className="movie-container">
            <div style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w300/${source}')` }}/>
            <p className="movie-title">{title}</p>
        </li>
    )
 }

export { MovieContainer }