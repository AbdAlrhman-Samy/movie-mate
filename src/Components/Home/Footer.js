//MUI imports
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

import tmdb from "../../Assets/tmdb.svg"
import logo from "../../Assets/my-logo.png"
function Footer() {
    return (
        <Container component="footer"
        sx={{display:"flex", px:3 ,justifyContent:"space-between", alignItems:"center", border:"3px solid", borderColor:"primary.main", color:"white",
            borderRadius:10, my:3, mx:"auto"}}>
                
            <Box>
                <Typography variant="subtitle1">Powered by <Box component="img" src={tmdb} alt="The Movie Database Logo"/></Typography>
            </Box>

            <Box my={2}>
                <Box maxWidth="50px" mx="auto" component="img" src={logo} sx={{display:"block"}} alt="AbdAlrhman Samy Logo"/>
            </Box>

        </Container>
    )
}

export default Footer
