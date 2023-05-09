import React from "react"
import ReactDOM from "react-dom"
import './index.css'

function Modal({ children }) {
    return ReactDOM.createPortal(
        <div className="modalBackground">{ children }</div>,
        (document.getElementById('modal'))
    )
}

export { Modal }
