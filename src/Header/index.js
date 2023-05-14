import React, {useEffect} from "react"
import { useAPI } from "../App/API"
import { useNavigate, Link } from "react-router-dom"
import './index.css'

function Header() {
    const {searchValue, setSearchValue} = useAPI()
    const navigate = useNavigate()

    const handleClick = event => {
        event.stopPropagation()
    }

    const handleSubmit = event => {
        event.preventDefault()
        navigate('/search/' + searchValue)
    }
    
    useEffect(() => {  
        setSearchValue('')
    }, [navigate, setSearchValue])

    return (
        <header id="header">
            
            <Link to='/' id="logo-link"><h1 id="logo" title="home">m</h1></Link>

            <form
                id="header-search-form"
                onSubmit={handleSubmit}
            >

                <input
                    type='text'
                    placeholder="Search movie..."
                    value={searchValue}
                    onChange={event => {setSearchValue(event.target.value)}}
                />

                <button
                    onClick={handleClick}
                    type="submit"
                >
                    Search
                </button>

            </form>
        </header>
    )
}

export { Header }