import React from "react"
import { CategoryHeader } from "../CategoryHeader"
import { BackButton } from "../BackButton"
import { MovieList } from "../MovieList"
import './index.css'
 
function Category({ categoryName, movies }) {
    return (
            <section id="category-section">
                
                <BackButton/>

                <CategoryHeader categoryName = {categoryName}/>

                <MovieList movies = { movies }/>

            </section>
    )
}

export { Category }