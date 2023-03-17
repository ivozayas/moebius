import React from "react"
import { MovieContainer } from "../MovieContainer"
import './index.css'

function PreviewList({ movies }) {
        return (
            <div id="container-movie-ul">
                <ul id="slider">
                    {movies ? (
                        movies.map(movie => {
                            return (
                    
                                    <MovieContainer
                                        source = {movie.poster_path}
                                        title = {movie.original_title}
                                        key = {movie.original_title}
                                    />
    
                            )
                        })
                        ) : ( console.log('cargando') )     
                    }
                    <li>
                        <div id="fake-container"></div>
                    </li>
                </ul>
            </div>
        )

}

export { PreviewList }