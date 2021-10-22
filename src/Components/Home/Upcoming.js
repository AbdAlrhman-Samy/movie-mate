//MUI imports
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

function Upcoming({upcoming}) {
    const frstTenUpcoming = upcoming.slice(0,10);
    return (
        <Container maxWidth="false" sx={{color:"text.light", bgcolor:"background.light", py:3, my:8, borderRadius:3}}>

            <Box>
                <Typography variant="h2" color="secondary">Upcoming</Typography>
                <Typography variant="h4" sx={{fontWeight:"light"}}>Movie releases</Typography>
            </Box>

            <Timeline position="alternate">


                {frstTenUpcoming.map(movie=>{
                    return(
                        <TimelineItem key={movie.id}>
                            <TimelineOppositeContent color="text.light">
                                {movie.release_date}
                            </TimelineOppositeContent>

                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>

                            <TimelineContent>
                                <Typography color="primary.main" variant="h5" sx={{fontWeight:"light"}}>{movie.title}</Typography>
                            </TimelineContent>
                        </TimelineItem>
                    )
                })}
                
            </Timeline>
            <Typography variant="caption" color="text.light">Based on release dates in the USA.</Typography>
        </Container>
    )
}

export default Upcoming
