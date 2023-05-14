import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useAPI } from './API'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { Home } from '../Home/Home'
import { MovieDetails } from '../MovieDetails'
import { Search } from '../Search' 
import { Trends } from '../Trends'
import { Category } from '../Category'
import { Categories } from '../Categories'
import { Wrapper } from '../Wrapper'

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
