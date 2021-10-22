//Router imports
import { Link } from "react-router-dom";

//Components imports
import SigninForm from "../Components/Signin/SigninForm";

//MUI imports
import Box from "@mui/material/Box"
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography"
import Container from '@mui/material/Container';
import AccountBoxIcon from '@mui/icons-material/AccountBox';import IconButton from "@mui/material/IconButton";
import Divider from '@mui/material/Divider';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Signin() {
    return (
        <Container sx={{minHeight:"100vh", display:"flex"}}>
            <Container maxWidth="md"
            sx={{bgcolor:"text.light", textAlign:"center", height:"fit-content", alignSelf:"center", py:2, position: "relative", borderRadius:5}}>
                
                <Link to="/" style={{ textDecoration: "none" }}>
                    <IconButton variant="outlined" color="secondary" size="small"
                    sx={{ position: "absolute", left: "0", top: "0", m: 1}}>
                        <ArrowBackIcon />
                    </IconButton>
                </Link>
                
                <Box>
                    <Box my={5}>
                        <AccountBoxIcon sx={{transform:"scale(5)", color:"primary.dark"}}/>
                    </Box>
                    <Divider><Typography variant="h6">Sign in to your account</Typography></Divider>
                </Box>

                <SigninForm/>

                <Divider><Typography variant="body1">Don't have an account?</Typography></Divider>
                    <Link to="/Signup" style={{ textDecoration: "none" }}>
                        <Button size="small" sx={{color:"secondary.dark"}}>Create one!</Button>
                    </Link>
            </Container>
            
        </Container>
    )
}

export default Signin
