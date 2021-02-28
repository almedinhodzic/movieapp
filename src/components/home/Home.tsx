import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { getMoviesForHomePage } from "../../store/actions/movieActions";
import { getShowsForHomePage } from "../../store/actions/showActions";
import ItemsCarousel from "../layout/ItemsCarousel";
import BackgroundCarousel from "../layout/BackgroundCarousel";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMoviesForHomePage());
    dispatch(getShowsForHomePage());
  }, [dispatch]);

  const trendingHomePage = useSelector(
    (state: RootState) => state.movies.trendingHomePage
  );
  const popularMovies = useSelector(
    (state: RootState) => state.movies.popularMovies
  );
  const topRatedMovies = useSelector(
    (state: RootState) => state.movies.topRatedMovies
  );
  const popularShows = useSelector(
    (state: RootState) => state.shows.popularShows
  );
  const topRatedShows = useSelector(
    (state: RootState) => state.shows.topRatedShows
  );

  return (
    <>
      {trendingHomePage?.results && (
        <BackgroundCarousel
          results={trendingHomePage.results}
          desc="TRENDING MOVIES/SHOWS"
        />
      )}
      {popularMovies?.results && (
        <ItemsCarousel
          heading="POPULAR MOVIES"
          results={popularMovies.results}
          type="movie"
        />
      )}
      {topRatedMovies?.results && (
        <ItemsCarousel
          heading="TOP RATED MOVIES"
          results={topRatedMovies.results}
          type="movie"
        />
      )}
      {popularShows?.results && (
        <ItemsCarousel
          heading="POPULAR TV SHOWS"
          results={popularShows.results}
          type="show"
        />
      )}
      {topRatedShows?.results && (
        <ItemsCarousel
          heading="TOP RATED TV SHOWS"
          results={topRatedShows.results}
          type="show"
        />
      )}
    </>
  );
};

export default Home;
