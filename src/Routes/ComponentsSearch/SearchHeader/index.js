import React from "react"
import './index.css'

function SearchHeader({ searchValue }) {
    return (
        <header id='search-header'>
            <h2>results for <span>{ searchValue }</span></h2>
        </header>
    )
}

export { SearchHeader }