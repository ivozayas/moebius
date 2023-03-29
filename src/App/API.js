import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
    params: {
        'api_key': '694358a1b71a2287a30f0b90af351f2e'
    }
})

function useAPI() {
    const [ trendMovies, setTrendMovies ] = useState([])
    const [ categories, setCategories ] = useState([])
    const [ searchResults, setSearchResults ] = useState([])
    const [ relatedMovies, setRelatedMovies ] = useState([])
    const [ selectedMovie, setSelectedMovie ] = useState({})
    const [ searchValue, setSearchValue] = useState('')
    const { search, movieID } = useParams()
 
    useEffect(() => {  

        async function fetchData() {

            const [trendingMoviesResponse, categoriesResponse] =
                await Promise.all([
                    api('trending/movie/week'),
                    api('genre/movie/list'),
                ])

            async function getMoviesByCategory(categoryID) {
                const { data } = await api('discover/movie?with_genres=' + categoryID)
                return data.results;
            }

            const categoriesWithMovies = await Promise.all(
                categoriesResponse.data.genres.map(async (category) => {
                    const movies = await getMoviesByCategory(category.id)
                    return {
                        ...category,
                        movies,
                    }
                })
            )
            
            setTrendMovies(trendingMoviesResponse.data.results)
            setCategories(categoriesWithMovies)
        }

        fetchData()
    }, [])

    useEffect(() => {
        async function getSearchedMovie() {
            const { data } = await api('search/movie?query=' + search)
            setSearchResults(data.results)
            setSearchValue(search)
        }

        getSearchedMovie()
    }, [search])

    useEffect(() => {
        if (movieID) {
            async function getMovieByID() {
                const { data } = await api('movie/' + movieID)
                setSelectedMovie(data)
            }

            async function getRelatedMovies() {
                const { data } = await api('movie/' + movieID + '/similar')
                setRelatedMovies(data.results)
            }

            getMovieByID()
            getRelatedMovies()
        }
    }, [movieID])

    return {
        trendMovies,
        categories,
        searchValue,
        setSearchValue,
        searchResults,
        selectedMovie,
        relatedMovies
    }
}

export { useAPI }