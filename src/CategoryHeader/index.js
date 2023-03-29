import React from "react"
import './index.css'
// import { HomeButton } from "../HomeButton"

function CategoryHeader({ categoryName }) {
    return (
        <header id='category-header'>
            <h2>{ categoryName.toLowerCase() }</h2>
        </header>
    )
}

export { CategoryHeader }