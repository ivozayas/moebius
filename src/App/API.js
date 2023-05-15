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
    const [moreMovies, setMoreMovies] = useState([])
    const [ maxPage, setMaxPage] = useState(0)
    const [ categoriesMaxPages, setCategoriesMaxPages ] = useState({})
    const { search, movieID } = useParams()
 
    useEffect(() => {  
        async function fetchData() {
            const [trendingMoviesResponse, categoriesResponse] =
                await Promise.all([
                    api('trending/movie/week'),
                    api('genre/movie/list'),
                ])
            
            const updatedCategoriesMaxPages = {}

            async function getMoviesByCategory(categoryID) {
                const { data } = await api('discover/movie?with_genres=' + categoryID)

                updatedCategoriesMaxPages[categoryID] = data.total_pages
                setCategoriesMaxPages(updatedCategoriesMaxPages)

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

            setMaxPage(trendingMoviesResponse.data.total_pages)
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
                
                setMaxPage(data.total_pages)
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

    async function getPaginatedMovies(route) {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement

        const scrollIsBottom = (scrollTop + clientHeight) >= (scrollHeight - 15)
        
        const page = moreMovies.length/20 + 2

        if (scrollIsBottom){
            if (route?.name === "trends") {
                if(page <= maxPage){
                    const { data } = await api('trending/movie/week', {
                        params: {
                            page,
                        },
                    })
    
                    setMoreMovies([...moreMovies, ...data.results])
                }                
            } else if (route?.name === "search") {
                if(page <= maxPage){
                    const { data } = await api('search/movie?query=' + search, {
                        params: {
                            page,
                        },
                    })

                    setMoreMovies([...moreMovies, ...data.results])
                }    
            } else if (route?.name === "category") {
                if(page <= categoriesMaxPages[route.id]){
                    const { data } = await api('discover/movie?with_genres=' + route.id, {
                        params: {
                            page,
                        },
                    })

                    setMoreMovies([...moreMovies, ...data.results])
                }
            } 
        }       
    }

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
        loading,
        getPaginatedMovies,
        moreMovies
    }
}

export { useAPI }