import React from "react"
import './index.css'
import { useAPI } from '../App/API'
import { CategoryHeader } from "../CategoryHeader"
import { BackButton } from '../BackButton'
import { MovieList } from '../MovieList'

function Trends() {
    const { trendMovies } = useAPI()
    return (
        <section id="trends-section">
            <BackButton/>

            <CategoryHeader categoryName='Trends'/>

            <MovieList movies={trendMovies} />
        </section>
    )
}

export { Trends }