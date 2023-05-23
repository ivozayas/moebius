import React from "react"
import './index.css'
import { MovieContainer } from "../MovieContainer"
import { FakeMovieContainer } from "../../LoadingSkeleton/FakeMovieContainer"
import { useAPI } from "../../App/API"

function MovieList({ movies, route }) {
    const {loading, getPaginatedMovies, moreMovies} = useAPI()
    const fakeMovies = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    
    if (moreMovies && movies) {
        movies = [...movies, ...moreMovies]
    }

    window.addEventListener('scroll', () => {getPaginatedMovies(route)})

    return(
        <section>
            <ul id="movie-list">
                {loading && 
                    fakeMovies.map((index) => {
                        return (<FakeMovieContainer key={index}/>)
                    })
                }
                {(!loading && movies) &&
                    movies.map(movie => {
                        return (
                            <MovieContainer
                                key = {movie.id}
                                movieData = {{
                                    source: movie.poster_path,
                                    title: movie.title,
                                    movieID: movie.id
                                }}
                            />
                        )
                    })   
                }
            </ul>
        </section>
    )
}

export { MovieList }