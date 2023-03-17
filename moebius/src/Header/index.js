import React from "react"
import './index.css'

function Header() {
    return (
        <header id="header">
            <h1>moebius</h1>
            <form id="header-search-form">
                <input type='text' placeholder="Buscar película..."/>
                <button>Buscar</button>
            </form>
        </header>
    )
}

export { Header }