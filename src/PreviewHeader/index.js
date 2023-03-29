import React from "react"
import { Link } from "react-router-dom"
import './index.css'

function PreviewHeader({ sectionTitle, sectionRout }){
    return (
        <header id="preview-header">
            <h2 id="preview-title">{ sectionTitle }</h2>
            {sectionRout && 
                <Link to={sectionRout}>
                    <button>more</button>
                </Link>
}
        </header>
    )
}

export { PreviewHeader }