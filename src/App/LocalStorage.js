import {useState, useEffect} from "react"

function useLocalStorage(movie) {
    const [onFav, setOnFav] = useState(false)
  
    useEffect(() => {
        let list

        if (!localStorage.getItem('fav_movies')) {
            localStorage.setItem('fav_movies', JSON.stringify({}))
        }

        list = JSON.parse(localStorage.getItem('fav_movies'))

        if (list[movie.movieID] && !onFav) {
            setOnFav(true)
            window.dispatchEvent(new Event('favMoviesChanged'));
        } else if (!list[movie.movieID] && onFav) {
            setOnFav(false)
        }
    }, [movie, onFav])

    function favMoviesList() {
        const list = localStorage.getItem('fav_movies')
        let movies

        if(list) {
            movies = JSON.parse(list)
        } else {
            movies = {}
        }

        return movies
    }

    function addFav() {
        const addedMovies = favMoviesList()

        if(addedMovies[movie.movieID]){
            delete addedMovies[movie.movieID]
            setOnFav(false)
        } else {
            // console.log(["localStorage", movie]);
            addedMovies[movie.movieID] = {
                poster_path: movie.source,
                title: movie.title,
                id: movie.movieID
            }
            setOnFav(true)
        }

        localStorage.setItem('fav_movies', JSON.stringify(addedMovies))
        console.log(['addFav', JSON.parse(localStorage.getItem('fav_movies'))]);
        window.dispatchEvent(new Event('favMoviesChanged'));
    }

    return {
        addFav,
        setOnFav,
        onFav
    }
}

export { useLocalStorage }