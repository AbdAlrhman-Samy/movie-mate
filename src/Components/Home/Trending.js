//MUI imports
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Divider from '@mui/material/Divider';

function Trending({trendingMovies, trendingShows}) {
    return (
        <Container maxWidth="false" sx={{color:"text.light", bgcolor:"background.light", py:3, my:8, borderRadius:3}}>
            <Box my={3}>
                <Typography variant="h2" color="secondary.light" >Trending </Typography>
            </Box>

            <Divider>
                <Typography variant="h4" color="primary.light">Movies</Typography>
            </Divider>
            

            <Container maxWidth="false" sx={{overflowX:"auto", overflowY:"hidden", whiteSpace:"nowrap", my:3, p:0, position:"relative"}}>

                {trendingMovies.map(movie=>{
                    return (
                        <ImageListItem key={movie.id} sx={{mr:2}}>
                            <Box component="img" maxWidth="250px" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} loading="lazy"/>
                            <ImageListItemBar title={movie.title}/>
                        </ImageListItem>
                    )
                })}
            </Container>
            
            <Divider>
                <Typography variant="h4" color="primary.light">TV Shows</Typography>
            </Divider>

            <Container maxWidth="false" sx={{overflowX:"auto", overflowY:"hidden", whiteSpace:"nowrap", my:3, p:0, position:"relative"}}>

            {trendingShows.map(show=>{
                    return (
                        <ImageListItem key={show.id} sx={{mr:2}}>
                            <Box component="img" maxWidth="250px" src={`https://image.tmdb.org/t/p/w342${show.poster_path}`} alt={show.name} loading="lazy"/>
                            <ImageListItemBar title={show.name}/>
                        </ImageListItem>
                    )
                })}
            </Container>

        </Container>
    )
}

export default Trending
