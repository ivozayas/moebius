import React from "react"
import './index.css'
import { MovieContainer } from "../MovieContainer"
import { FakeMovieContainer } from "../LoadingSkeleton/FakeMovieContainer"
import { useAPI } from "../App/API"

function MovieList({ movies }) {
    const {loading} = useAPI()
    const fakeMovies = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

    return(
        <ul id="movie-list">
            {loading && 
                fakeMovies.map((index) => {
                    return (<FakeMovieContainer key={index}/>)
                })
            }
            {(!loading && movies) ? (
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
        </ul>
    )
}

export { MovieList }