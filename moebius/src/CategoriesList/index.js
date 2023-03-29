import React from "react"
import { CategoryTitle } from '../CategoryTitle'
import './index.css'

function CategoriesList({ categories }) {
    return (
        <ul id="categories-ul">
            { categories.map(category => {
                return (
                    <CategoryTitle
                        key={category.name}
                        name = {category.name}
                        color = {category.color}
                    />
                )
            }) }
        </ul>
    )
}

export { CategoriesList }
