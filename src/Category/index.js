import React from "react"
import { CategoryHeader } from "../CategoryHeader"
import { BackButton } from "../BackButton"
import { MovieList } from "../MovieList"
import './index.css'
 
function Category({ categoryName, categoryID, movies }) {

    return (
            <section id="category-section">
                
                <BackButton/>

                <CategoryHeader categoryName = {categoryName}/>

                <MovieList movies = { movies } route={{name: "category", id: categoryID}}/>

            </section>
    )
}

export { Category }