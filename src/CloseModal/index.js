import React from "react"
import './index.css'

function CloseModal({ setShowPoster }) {
    return (
        <button id="close-modal"  onClick={() => { setShowPoster(false) }}>
            <i className="fa-solid fa-xmark fa-4x"></i>
        </button>
    )
}

export { CloseModal }