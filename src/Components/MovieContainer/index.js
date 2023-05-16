import React from "react"
import { Link } from "react-router-dom"
import { useInView } from "react-intersection-observer"
import './index.css'
import { useState } from "react"

function MovieContainer({ source, title, movieID}) {
    const { ref, inView/*, entry*/ } = useInView({
        threshold: 0.1,
    })

    const [onFav, setOnFav] = useState(false)

    // if (inView) {
    //     console.log(entry.target.title)
    // }

    function handleFav(event, id) {
        event.preventDefault()
        setOnFav(!onFav)
    }

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
                            onClick={(event) => handleFav(event, movieID)}
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