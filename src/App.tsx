import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.scss";
import Actor from "./components/actors/Actor";
import PopularActors from "./components/actors/PopularActors";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/layout/Navbar";
import Movie from "./components/movie/Movie";
import Movies from "./components/movies/Movies";
import NowPlayingMovies from "./components/movies/NowPlayingMovies";
import PopularMovies from "./components/movies/PopularMovies";
import TopRatedMovies from "./components/movies/TopRatedMovies";
import UpcomingMovies from "./components/movies/UpcomingMovies";
import SearchResults from "./components/searchResults/SearchResults";
import Show from "./components/show/Show";
import AiringTodayShows from "./components/shows/AiringTodayShows";
import OnTheAirShows from "./components/shows/OnTheAirShows";
import PopularShows from "./components/shows/PopularShows";
import Shows from "./components/shows/Shows";
import TopRatedTvShows from "./components/shows/TopRatedShows";
import { RootState } from "./store";
import Loader from "./components/Loader/Loader";
import NotFound from "./components/NotFound/NotFound";

const App: React.FC = () => {
  const movieLoading = useSelector((state: RootState) => state.movies.loading);
  const showLoading = useSelector((state: RootState) => state.shows.loading);
  const actorLoading = useSelector((state: RootState) => state.actors.loading);
  return (
    <Router>
      <Navbar />
      {movieLoading || showLoading || actorLoading ? (
        <Loader />
      ) : (
        <>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movies" exact component={Movies} />
            <Route
              path="/movies/upcoming-movies"
              exact
              component={UpcomingMovies}
            />
            <Route
              path="/movies/top-rated-movies"
              exact
              component={TopRatedMovies}
            />
            <Route
              path="/movies/popular-movies"
              exact
              component={PopularMovies}
            />
            <Route
              path="/movies/now-playing-movies"
              exact
              component={NowPlayingMovies}
            />
            <Route path="/movie/:id" exact component={Movie} />
            <Route path="/shows" exact component={Shows} />
            <Route path="/shows/popular-shows" exact component={PopularShows} />
            <Route
              path="/shows/top-rated-shows"
              exact
              component={TopRatedTvShows}
            />
            <Route
              path="/shows/on-the-air-shows"
              exact
              component={OnTheAirShows}
            />
            <Route
              path="/shows/airing-today-shows"
              exact
              component={AiringTodayShows}
            />
            <Route path="/show/:id" exact component={Show} />
            <Route path="/actors" exact component={PopularActors} />
            <Route path="/actor/:id" exact component={Actor} />
            <Route path="/search/:name" exact component={SearchResults} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </>
      )}
    </Router>
  );
};

export default App;
