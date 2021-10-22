//Router imports
import { Link } from "react-router-dom";

//Components imports
import SignupForm from "../Components/Signup/SignupForm";
//MUI imports
import Box from "@mui/material/Box"
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography"
import Container from '@mui/material/Container';
import GroupsIcon from '@mui/icons-material/Groups';
import IconButton from "@mui/material/IconButton";
import Divider from '@mui/material/Divider';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Signin() {
    return (
        <Container sx={{minHeight:"100vh", display:"flex", py:5}}>
            <Container maxWidth="md"
            sx={{bgcolor:"text.light", textAlign:"center", height:"fit-content", alignSelf:"center", py:2, position: "relative", borderRadius:5}}>
                
                <Link to="/" style={{ textDecoration: "none" }}>
                    <IconButton variant="outlined" color="secondary" size="small"
                    sx={{ position: "absolute", left: "0", top: "0", m: 1}}>
                        <ArrowBackIcon />
                    </IconButton>
                </Link>
                
                <Box>
                    <Box my={3}>
                        <GroupsIcon sx={{transform:"scale(5)", color:"primary.dark"}}/>
                    </Box>
                    <Divider><Typography variant="h6">Create a new account</Typography></Divider>
                </Box>

                <SignupForm/>

                <Divider><Typography variant="body1">Already have an account?</Typography></Divider>
                    <Link to="/Signin" style={{ textDecoration: "none" }}>
                        <Button size="small" sx={{color:"secondary.dark"}}>Sign in!</Button>
                    </Link>
            </Container>
            
        </Container>
    )
}

export default Signin
