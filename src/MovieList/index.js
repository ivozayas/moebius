import React from "react"
import './index.css'
import { MovieContainer } from "../MovieContainer"

function MovieList({ movies }) {
    return(
        <ul id="movie-list">
               {movies ? (
                    movies.map(movie => {
                        return (
                            <MovieContainer
                                key = {movie.original_title}
                                source = {movie.poster_path}
                                title = {movie.title}
                                movieID = {movie.id}
                            />
                        )
                    })
                    ) : ( console.log('cargando') )     
                }
        </ul>
    )
}

export { MovieList }