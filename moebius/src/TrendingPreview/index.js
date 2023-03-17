import React from "react"
import './index.css'

function TrendingPreview({ children }){
    return (
        <section id="trending-preview">
            { children }
        </section>
    )
}

export { TrendingPreview }