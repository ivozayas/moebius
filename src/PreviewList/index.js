import React from "react"
import { MovieContainer } from "../MovieContainer"
import './index.css'

function PreviewList({ movies }) {
        return (
            <ul id="container-movie-ul">
                {movies ? (
                    movies.map(movie => {
                        return (
                
                                <MovieContainer
                                    key = {movie.id}
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

export { PreviewList }