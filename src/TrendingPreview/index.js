import React from "react"
import './index.css'

function TrendingPreview({ children }){
    return (
        <section className="section">
            { children }
        </section>
    )
}

export { TrendingPreview }