import { useLayoutEffect } from "react"
import { useLocation } from "react-router-dom"

function Wrapper({ children }){
    const location = useLocation()

    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0)
      console.log(location.pathname);
    }, [location.pathname])

    return children
}

export { Wrapper }