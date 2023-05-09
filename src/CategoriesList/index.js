import React from "react"
import { CategoryTitle } from '../CategoryTitle'
import './index.css'
import { FakeCategoryTitle } from "../LoadingSkeleton/FakeCategoryTitle"

function CategoriesList({ categories, loading }) {
    const fakeCategories = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]

    return (
        <ul id="categories-ul">
            {loading &&
                fakeCategories.map((index) => {
                    return (<FakeCategoryTitle key={index}/>)
                })
            }

            {(!loading && categories) &&
                categories.map(category => {
                    return (
                        <CategoryTitle
                            key = {category.name}
                            categoryID = {category.id}
                            categoryName = {category.name}
                        />
                    )
                })
            }
        </ul>
    )
}

export { CategoriesList }
