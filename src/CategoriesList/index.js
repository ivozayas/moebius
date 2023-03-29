import React from "react"
import { CategoryTitle } from '../CategoryTitle'
import './index.css'

function CategoriesList({ categories }) {
    return (
        <ul id="categories-ul">
            {categories && categories.map(category => {
                return (
                    <CategoryTitle
                        key = {category.name}
                        categoryID = {category.id}
                        categoryName = {category.name}
                    />
                )
            }) }
        </ul>
    )
}

export { CategoriesList }
