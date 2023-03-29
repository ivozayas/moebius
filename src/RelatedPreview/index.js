import React from "react"
import { MovieContainer } from "../MovieContainer"
import './index.css'

function RelatedPreview({ movies }) {
    console.log(movies);
    return (
        <ul id="container-movie-ul-vertical">
            {movies ? (
                movies.map(movie => {
                    return (
                        <MovieContainer
                            key = {movie.title}
                            source = {movie.poster_path}
                            title = {movie.title}
                            movieID = {movie.id}
                        />
                    )
                })
                ) : ( console.log('cargando') )     
            }
            <li>
                <div id="fake-container"></div>
            </li>
        </ul>
    )

}


export { RelatedPreview }