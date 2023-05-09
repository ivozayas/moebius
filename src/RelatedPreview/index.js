import React from "react"
import { MovieContainer } from "../MovieContainer"
import { FakeMovieContainer } from "../LoadingSkeleton/FakeMovieContainer"
import { useAPI } from '../App/API'
import './index.css'

function RelatedPreview({ movies }) {
    const { loading } = useAPI()
    const fakeMovies = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <ul id="container-movie-ul-vertical">
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
            <li>
                <div id="fake-container"></div>
            </li>
        </ul>
    )

}


export { RelatedPreview }