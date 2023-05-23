import React from "react"
import { Link } from "react-router-dom"
import { useInView } from "react-intersection-observer"
import { useLocalStorage } from "../../App/LocalStorage"
import './index.css'


function MovieContainer({ movieData }) {
    const { addFav, onFav, setOnFav } = useLocalStorage(movieData)
    const { source, title, movieID } = movieData


    function handleFav(event) {
        event.preventDefault()
        setOnFav(!onFav)
        addFav()
    }

    const { ref, inView } = useInView({
        threshold: 0.1,
    })

    //
    return (
        <Link 
            to={`/movie-details/${movieID}`}
            style={{ textDecoration: 'none', opacity: inView ? 1 : 0,  transition: 'opacity 0.5s ease-in-out'}}
            ref={ref}
            title={title}
        >
            <li className="movie-container">
                { inView &&
                    <div>
                        <div
                            style={(source) ?
                                ({ backgroundImage: `url('https://image.tmdb.org/t/p/w300/${source}')` }) : 
                                ({background: 'linear-gradient(10deg, rgba(56,15,57,1) 25%, rgba(81,20,82,1) 100%)'}
                            )}
                        />
                        <i
                            className={`fa-solid fa-star ${onFav ? 'remove-fav' : 'add-fav'}`}
                            id="fav-btn"
                            onClick={(event) => handleFav(event)}
                            title={onFav ? 'remove fav' : 'add fav'}
                        />
                        <p className="movie-title">{title}</p>
                    </div>
                }
            </li>
        </Link>
    )
}

export { MovieContainer }