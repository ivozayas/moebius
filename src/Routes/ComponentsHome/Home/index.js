import React from 'react'
import { useAPI } from '../../../App/API.js'
import { TrendingPreview } from '../TrendingPreview'
import { PreviewHeader } from '../../../Components/PreviewHeader'
import { PreviewList } from '../../../Components/PreviewList'
import { CategoriesPreview } from '../CategoriesPreview'
import { CategoriesList } from '../CategoriesList'
import { FavouriteMovies } from '../FavouriteMovies/index.js'

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
            
            <FavouriteMovies>
                <PreviewHeader
                    sectionTitle = 'favorites'
                    // sectionRout= '/trends'
                />

                <PreviewList
                    movies = {trendMovies}
                />
            </FavouriteMovies>
            
        </React.Fragment>
    )
}

export { Home }