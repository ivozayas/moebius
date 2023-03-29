import React from "react"
import './index.css'

function PreviewHeader({ sectionTitle }){
    return (
        <header id="preview-header">
            <h2 id="preview-title">{ sectionTitle }</h2>
            <button>Ver más</button>
        </header>
    )
}

export { PreviewHeader }