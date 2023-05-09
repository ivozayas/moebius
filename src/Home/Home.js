import React from 'react'
import { useAPI } from '../App/API.js'
import { TrendingPreview } from '../TrendingPreview'
import { PreviewHeader } from '../PreviewHeader'
import { PreviewList } from '../PreviewList'
import { CategoriesPreview } from '../CategoriesPreview'
import { CategoriesList } from '../CategoriesList'

function Home(){
    const { trendMovies, categories, loading } = useAPI()

    return (
        <React.Fragment>
            <TrendingPreview>

                <PreviewHeader
                    sectionTitle = 'trends'
                    sectionRout= '/trends'
                />

                <PreviewList
                    movies = {trendMovies}
                />

            </TrendingPreview>

            <CategoriesPreview>

                <PreviewHeader
                    sectionTitle = 'categories'
                    sectionRout = '/categories' 
                />

                <CategoriesList
                    categories = {categories}
                    loading = {loading}
                />

            </CategoriesPreview>
            
        </React.Fragment>
    )
}

export { Home }