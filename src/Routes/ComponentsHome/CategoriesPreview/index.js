import React from "react"
import './index.css'

function CategoriesPreview({ children }) {
    return (
        <section id="categories-preview">
            { children }
        </section>
    )
}

export { CategoriesPreview }