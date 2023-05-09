import React from "react"
import './index.css'
import { BackButton } from '../BackButton'
import { PreviewList } from "../PreviewList"
import { useAPI } from '../App/API'
import { PreviewHeader } from "../PreviewHeader"

function Categories() {
    const { categories } = useAPI()

    return(
        <ul id="category-lists-list">
            <BackButton/>

            {categories.map(category => {
                return (
                    <li id="category-list" key={category.name}>
                        <PreviewHeader 
                            sectionTitle={category.name.toLowerCase()}
                            sectionRout={`/category=${category.id}-${category.name}`}
                        />
                    
                        <PreviewList movies={category.movies}/>
                    </li>
                )
            })}
        </ul>
    )
}

export { Categories }