import React from "react"
import { useAPI } from "../App/API"
import { MovieList } from "../MovieList"
import { BackButton } from "../BackButton"
import { SearchHeader } from "../SearchHeader"
import './index.css'


function Search() {
    const { searchResults, searchValue } = useAPI()

    return (
        <section id="search-section">
            <BackButton/>

            {searchResults.length > 0 ? (
                <div>
                    <SearchHeader searchValue={searchValue}/>

                    <MovieList movies={searchResults}/>
                </div>
            ) : (
                <h2>there are no results for <span>{ searchValue }</span></h2>
            )}            
        </section>
    )
}

export { Search }