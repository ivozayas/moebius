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
    const [ showPoster, setShowPoster ] = useState(false)
    const [ loading, setLoading ] = useState(true)
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
            setLoading(false)
        }

        fetchData()
    }, [])

    useEffect(() => {
        if(search){
            async function getSearchedMovie() {
                const { data } = await api('search/movie?query=' + search)
                
                setSearchResults(data.results)
                setSearchValue(search)
                setLoading(false)
            }
    
            getSearchedMovie()
        }
    }, [search])

    useEffect(() => {
        if (movieID) {
            async function getMovieByID() {
                const { data } = await api('movie/' + movieID)
                setSelectedMovie(data)
                setLoading(false)
            }

            async function getRelatedMovies() {
                const { data } = await api('movie/' + movieID + '/similar')
                setRelatedMovies(data.results)
                setLoading(false)
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
        relatedMovies,
        setShowPoster,
        showPoster,
        loading
    }
}

export { useAPI }