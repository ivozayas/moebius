import React from "react"
import './index.css'
import { useNavigate } from "react-router-dom"

function BackButton() {
    const navigate = useNavigate()

    return (
        <button id="back-button"  onClick={() => navigate(-1)}>
            <i className="fa-solid fa-chevron-left fa-3x"></i>
        </button>
    )
}

export { BackButton }