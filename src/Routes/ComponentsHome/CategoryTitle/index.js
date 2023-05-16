import React from "react"
import './index.css'
import { Link } from "react-router-dom"

function CategoryTitle({ categoryName, categoryID }) {
    return (
        <Link to={`/category=${categoryID}-${categoryName}`} id='category-title'><h3>{ categoryName }</h3></Link>
    )
}

export { CategoryTitle }