//MUI imports
import Container from "@mui/material/Container"

//Components imports
import Header from "../Components/Home/Header"
import Trending from "../Components/Home/Trending"
import Footer from "../Components/Home/Footer"
import Upcoming from "../Components/Home/Upcoming"
import { useEffect } from "react"
function Home({trendingMovies, trendingShows, upcoming}) {

    useEffect(() => {
        console.log('Home');
    }, [])

    return (
        <Container maxWidth={false}>
            <Header/>
            {trendingShows && trendingMovies && <Trending trendingMovies={trendingMovies} trendingShows={trendingShows}/>}
            {upcoming && <Upcoming upcoming={upcoming}/>}
            
            <Footer/>
        </Container>
    )
}

export default Home