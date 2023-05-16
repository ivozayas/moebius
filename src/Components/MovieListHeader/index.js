import React from "react"
import './index.css'
// import { HomeButton } from "../HomeButton"

function MovieListHeader({ title }) {
    return (
        <header id='movie-list-header'>
            <h2>{ title.toLowerCase() }</h2>
        </header>
    )
}

export { MovieListHeader }