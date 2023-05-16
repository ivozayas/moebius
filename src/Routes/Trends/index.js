import React from "react"
import './index.css'
import { useAPI } from '../../App/API'
import { MovieListHeader } from "../../Components/MovieListHeader"
import { BackButton } from '../../Components/BackButton'
import { MovieList } from '../../Components/MovieList'

function Trends() {
    const { trendMovies } = useAPI()

    return (
        <section id="trends-section">
            <BackButton/>

            <MovieListHeader title='Trends'/>

            <MovieList movies={trendMovies} route={{name: "trends"}}/>
        </section>
    )
}

export { Trends }