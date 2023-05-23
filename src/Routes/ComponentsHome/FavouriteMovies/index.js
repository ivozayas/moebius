import React, { useEffect, useState } from "react"
import { PreviewHeader } from '../../../Components/PreviewHeader'
import { PreviewList } from '../../../Components/PreviewList'
import './index.css'

function FavouriteMovies() {
    const [favMovies, setFavMovies ] = useState([])
    
    useEffect(() => {
        const handleFavMoviesChanged = () => {
          // Obtener el contenido actualizado de la clave fav_movies
          const updatedFavMovies = JSON.parse(localStorage.getItem('fav_movies')) || "{}"

          // console.log(["updatedFavMovies: ", Object.values(updatedFavMovies).map(item => item)]);
          
          setFavMovies(Object.values(updatedFavMovies).map(item => item));
        };
    
        // Suscribirse al evento personalizado 'favMoviesChanged'
        window.addEventListener('favMoviesChanged', handleFavMoviesChanged);
    
        // Eliminar el listener cuando se desmonte el componente
        return () => {
          window.removeEventListener('favMoviesChanged', handleFavMoviesChanged);
        };
      }, []);

    return (
        <section id="favourite-section" className="section">
              <PreviewHeader
                    sectionTitle = 'favorites'
                />

                {(favMovies.length > 0) ?
                    <PreviewList
                        movies = {favMovies}
                    /> :
                    <h2 
                    style={{ paddingLeft: "20px", fontSize: "20px", fontWeight: "400" }}
                    >You haven't added any movies yet...</h2>
                }
        </section>
    )
}

export { FavouriteMovies }