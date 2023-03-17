import React from "react"
import './index.css'

function CategoryTitle({ name }) {
    return (
        <li id="category-title-li">
            {/* <div style={{ backgroundColor: `${color}` }}/> */}
            <h3>{ name }</h3>
        </li>
    )
}

export { CategoryTitle }