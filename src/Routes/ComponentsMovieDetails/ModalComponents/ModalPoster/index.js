import React from "react"
import './index.css'

function ModalPoster({ source, title }){
    return (
        <div id="poster-modal">
            <img
                src={source}
                alt={title}
            />    
        </div>
    )
}

export { ModalPoster }
