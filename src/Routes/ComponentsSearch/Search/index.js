import React from "react"
import { useAPI } from "../../../App/API"
import { MovieList } from "../../../Components/MovieList"
import { BackButton } from "../../../Components/BackButton"
import { SearchHeader } from "../SearchHeader"
import './index.css'


function Search() {
    const { searchResults, searchValue, loading } = useAPI()

    return (
        <section id="search-section">
            {loading && (
                <div>
                    <h2>searching results for <span>{ searchValue }</span>...</h2>

                    <MovieList/>
                </div>
            )}
             
            {(!loading && searchResults.length > 0) ? 
                <div>
                    <BackButton/>

                    <SearchHeader searchValue={searchValue}/>

                    <MovieList movies={searchResults} route={{name: "search"}}/>
                </div> :
                <div>
                    <BackButton/>
                    <h2>there are no results for <span>{ searchValue }</span></h2>
                </div>
            }
        </section>
    )
}

export { Search }