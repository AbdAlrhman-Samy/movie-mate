//Router imports
import { Link } from "react-router-dom";

//MUI imports
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography"
import Divider from '@mui/material/Divider';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LoginIcon from '@mui/icons-material/Login';

//Other imports
import blob from "../../Assets/blob.svg"
import logo from "../../Assets/logo.svg"

function Header() {
    return (
        <Grid container justifyContent="space-evenly" alignItems="center" sx={{color:"text.light", textAlign:"center", height:"min-content"}}>

            <Grid item md={4}>
                <Box p={5} mx="auto"
                sx={{backgroundImage:`url(${blob})`, backgroundRepeat:"no-repeat", backgroundPosition:"center"}}>
                    <Typography variant="h1">Movie Mate</Typography>
                    <Typography variant="h5">The movie lovers' best companion</Typography>
                </Box>

                <Link to="/Signup" style={{textDecoration:"none"}}>
                    <Button variant="outlined" color="secondary"><PersonAddIcon sx={{marginRight:1}}/> Create an account</Button>
                </Link>

                <Divider sx={{ color:"text.light", my:1}}><Typography variant="overline">Already have one?</Typography></Divider>

                <Link to="/Signin" style={{textDecoration:"none"}}>
                    <Button variant="contained" color="primary" sx={{color:"text.light"}}><LoginIcon sx={{marginRight:1}}/>Login</Button>                      
                </Link>
            </Grid>

            <Grid item md={4}>
                <Box p={5} mx="auto" width="100%" component="img" src={logo}/>
            </Grid>
            
        </Grid>
    )
}

export default Header
