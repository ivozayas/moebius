import React from "react"
import './index.css'
import { useAPI } from '../App/API'
import { BackButton } from "../BackButton"
import { RelatedPreview } from '../RelatedPreview'
import { PreviewList } from '../PreviewList'
import { CategoriesList } from "../CategoriesList"
import { Modal } from "../ModalComponents/Modal"
import { ModalPoster } from "../ModalComponents/ModalPoster"
import { CloseModal } from "../ModalComponents/CloseModal"
import { FakeMovieDetails } from '../LoadingSkeleton/FakeMovieDetails'

function MovieDetails(){
    const { selectedMovie, relatedMovies, setShowPoster, showPoster, loading } = useAPI()

    return (    
        <section>
            {!showPoster && <BackButton/>}

            {loading && 
                <FakeMovieDetails/>
            }

            {(!loading && selectedMovie) ? (
                <section id="movie-details-section">
                    <div id="movie-data-container">  
                        <div 
                            id='movie-poster'
                            title="show larger image"
                            style={selectedMovie.poster_path ?
                                ({ backgroundImage: `url('https://image.tmdb.org/t/p/w300/${selectedMovie.poster_path}')` }) : 
                                ({background: 'linear-gradient(0deg, rgba(56,15,57,1) 25%, rgba(81,20,82,1) 100%)'})}
                            onClick={() => { if(selectedMovie.poster_path){setShowPoster(true)}}}
                        />

                        <div id="movie-data">
                        
                            <div id="title-punctuation">
                                <div>
                                    <h2 id="movie-title">{selectedMovie.title}</h2>
                                    {(selectedMovie.original_title !== selectedMovie.title) && (
                                        <h3 id="original-title">{selectedMovie.original_title}</h3>
                                    )}
                                </div>
                                {(selectedMovie.vote_average > 0) && (
                                    <div id="movie-punctuation">
                                        <i className="fa-solid fa-star"></i>
                                        <p>{selectedMovie.vote_average.toFixed(1)}</p>
                                    </div>
                                )}
                            </div>

                            {selectedMovie.overview && <p id="overview"><span>Overview</span><br/>{selectedMovie.overview}</p>}
                            
                            <div id="year-duration">
                                {(selectedMovie.runtime > 0) && <p><span>Duration:</span> {selectedMovie.runtime} min</p>}
                                {selectedMovie.release_date && <p><span>Year:</span> {selectedMovie.release_date}</p>}
                            </div>

                            {(!!selectedMovie["genres"] && selectedMovie["genres"].length > 0) && 
                                <div id="movie-categories">
                                    <h2>categories</h2>
                                    <CategoriesList categories={selectedMovie.genres}/>
                                </div>
                            }

                        </div>
                    </div>
    
                {(relatedMovies.length > 0) &&
                    <div id="related-movies-container-vertical">
                        <h3>related movies:</h3>
                        <RelatedPreview movies = {relatedMovies}/>
                    </div>
                }

                {(relatedMovies.length > 0) &&        
                    <div id="related-movies-container-horizontal">
                        <h3>related movies:</h3>
                        <PreviewList movies = {relatedMovies}/>
                    </div>
                }
    
                {(!!showPoster && !!selectedMovie.poster_path) &&
                    <Modal>
                        <CloseModal setShowPoster={setShowPoster}/>
                        <ModalPoster
                            source={`https://image.tmdb.org/t/p/w300/${selectedMovie.poster_path}`}
                            title={selectedMovie.title}
                        />
                    </Modal>
                }          
            </section>
            ) : (
                <section id="movie-not-found">
                    <BackButton/>
                    <h2>the requested movie was not found</h2>
                </section>
            )}

        </section>
    )
}

export { MovieDetails }