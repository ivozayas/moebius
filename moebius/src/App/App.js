import React from 'react'
import './App.css'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { TrendingPreview } from '../TrendingPreview'
import { PreviewHeader } from '../PreviewHeader'
import { PreviewList } from '../PreviewList'
import { CategoriesPreview } from '../CategoriesPreview'
import { CategoriesList } from '../CategoriesList'
import { GenericPreview } from '../GenericPreview'
import { useAPI } from './API.js'

function App() {

  const { movies, categories } = useAPI()

  // const firstRowCategories = [
  //   {name: 'Animación', color: '#ffb27f'},
  //   {name: 'Drama', color: '#6462c9'},
  //   {name: 'Suspenso', color: '#78c3ba'}, 
  //   {name: 'Fantasía', color: '#ce8fff'}
  // ]

  // const secondRowCategories = [
  //   {name: 'Terror', color: '#82139e'},
  //   {name: 'Acción', color: '#f63078'},
  //   {name: 'Comedia', color: '#ffff7f'},
  //   {name: 'Romance', color: '#ff92d3'}
  // ]

  return (
    <React.Fragment>

      <Header/>

      <TrendingPreview>

        <PreviewHeader
          sectionTitle = 'Tendencias'
        />

        <PreviewList
          movies = {movies}
        />
        
      </TrendingPreview>

      <CategoriesPreview>

        <PreviewHeader
          sectionTitle = 'Categorías'
        />

        <CategoriesList
          categories = {categories}
        />

      </CategoriesPreview>

      <GenericPreview>

        <PreviewHeader
          sectionTitle= 'Recomendadas'
        />

        <PreviewList
          movies = {movies}
        />

      </GenericPreview>

      <Footer/>
      
    </React.Fragment>
  )
}

export { App }
