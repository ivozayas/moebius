import React from "react"
import { Link } from "react-router-dom"
import { useInView } from "react-intersection-observer"
import './index.css'

function MovieContainer({ source, title, movieID}) {
    const { ref, inView/*, entry*/ } = useInView({
        threshold: 0.1,
    })

    // if (inView) {
    //     console.log(entry.target.title)
    // }

    return (
        <Link 
            to={`/movie-details/${movieID}`}
            style={{ textDecoration: 'none', opacity: inView ? 1 : 0, }}
            className={`fade`}
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
                        <p className="movie-title">{title}</p>
                    </div>
                }
            </li>
        </Link>
    )
}

export { MovieContainer }