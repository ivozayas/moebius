import React from "react"
import './index.css'

function GenericPreview({ children }) {
    return (
        <section id="generic-preview">
            { children }
        </section>
    )
}

export { GenericPreview }