import React from "react"
import { Link } from "react-router-dom"
import './index.css'

function MovieContainer({ source, title, movieID}) {
    return (
        <Link to={`/movie-details/${movieID}`} style={{ textDecoration: 'none' }}>
            <li className="movie-container">
                <div>
                    <div
                        style={source ?
                            ({ backgroundImage: `url('https://image.tmdb.org/t/p/w300/${source}')` }) : 
                            ({background: 'linear-gradient(0deg, rgba(56,15,57,1) 25%, rgba(81,20,82,1) 100%)'})}/>
                    <p className="movie-title">{title}</p>
                </div>
            </li>
        </Link>
    )
}

export { MovieContainer }