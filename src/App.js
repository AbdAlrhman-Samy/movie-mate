//Router imports
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
//Pages imports
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import { useEffect, useState } from "react";

export default function App() {

  const [trendingMovies, setTrendingMovies] = useState()
  const [trendingShows, setTrendingShows] = useState()
  const [upcoming, setUpcoming] = useState()

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(res=>setTrendingMovies(res.data.results))

    axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(res=>setTrendingShows(res.data.results))

    axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&region=US`)
    .then(res=>setUpcoming(res.data.results))
}, [])

  return (
    <Router>

        <Switch>

          <Route exact path="/">
            <Home trendingMovies={trendingMovies} trendingShows={trendingShows} upcoming={upcoming}/>
          </Route> 

          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/signin" component={Signin}/>
          <Route component={Error}/>
        </Switch>

    </Router>
  );
}