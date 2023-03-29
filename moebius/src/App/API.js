// import React, { useEffect } from "react"
import axios from "axios"
import { useEffect, useState } from "react"

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
    params: {
        'api_key': '694358a1b71a2287a30f0b90af351f2e'
    }
})

// const API_KEY = '694358a1b71a2287a30f0b90af351f2e'

function useAPI() {
    const [ movies, setMovies ] = useState([])
    const [ categories, setCategories ] = useState([])

    useEffect(() => {
        async function getTrendingMoviesPreview() {
            const { data } = await api('trending/movie/week')
            setMovies(data.results)
        }
    
        async function getCategoriesPreview() {
            const { data } = await api('genre/movie/list')
            setCategories(data.genres)
        }

        getTrendingMoviesPreview()
        getCategoriesPreview()
    }, [])

    return {
        movies,
        categories
    }
}

export { useAPI }