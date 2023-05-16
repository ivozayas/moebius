import React from "react"
import { MovieListHeader } from "../../Components/MovieListHeader"
import { BackButton } from "../../Components/BackButton"
import { MovieList } from "../../Components/MovieList"
import './index.css'
 
function Category({ categoryName, categoryID, movies }) {

    return (
            <section id="category-section">
                
                <BackButton/>

                <MovieListHeader title = {categoryName}/>

                <MovieList movies = { movies } route={{name: "category", id: categoryID}}/>

            </section>
    )
}

export { Category }