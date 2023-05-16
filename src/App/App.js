import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useAPI } from './API'
import { Footer } from '../Shared/Footer'
import { Header } from '../Shared/Header'
import { Home } from '../Routes/ComponentsHome/Home'
import { Search } from '../Routes/ComponentsSearch/Search' 
import { Trends } from '../Routes/Trends'
import { Category } from '../Routes/Category'
import { Categories } from '../Routes/Categories'
import { Wrapper } from '../Shared/Wrapper'
import { MovieDetails } from '../Routes/ComponentsMovieDetails/MovieDetails'

function App() {

  const {
    categories
  } = useAPI()

  return (
    <Wrapper>

      <Header/>

        <Routes>

          <Route path='/' exact element={<Home/>}/>

          <Route path='/trends' exact element={<Trends/>}/>

          <Route path='/categories' element={<Categories/>}/>

          <Route path='/movie-details/:movieID' element={<MovieDetails/>}/>   

          <Route path='/search/:search' element={<Search/>}/>    

          {categories.map(category => {
            return (
              <Route
                key={category.id}
                path={`/category=${category.id}-${category.name}`}
                element={<Category 
                    categoryName={category.name}
                    categoryID={category.id}
                    movies={category?.movies}
                  />}
              />
            )
          })}

        </Routes>

      <Footer/>
      
    </Wrapper>
  )
}

export { App }
