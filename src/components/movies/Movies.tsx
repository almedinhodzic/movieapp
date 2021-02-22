import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesContent } from "../../store/actions/movieActions";
import { RootState } from "../../store";
import BackgroundCarousel from "../layout/BackgroundCarousel";
import ItemsCarousel from "../layout/ItemsCarousel";

const Movies: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMoviesContent());
  }, [dispatch]);
  const trendingMovies = useSelector(
    (state: RootState) => state.movies.trendingMovies
  );
  const nowPlayingMovies = useSelector(
    (state: RootState) => state.movies.nowPlayingMovies
  );
  const upcomingMovies = useSelector(
    (state: RootState) => state.movies.upcomingMovies
  );
  const popularMovies = useSelector(
    (state: RootState) => state.movies.popularMovies
  );
  const topRatedMovies = useSelector(
    (state: RootState) => state.movies.topRatedMovies
  );
  return (
    <>
      {trendingMovies && trendingMovies.results && (
        <BackgroundCarousel
          results={trendingMovies.results}
          desc="TRENDING IN MOVIES"
        />
      )}
      {nowPlayingMovies && nowPlayingMovies.results && (
        <ItemsCarousel
          heading="NOW PLAYING MOVIES"
          results={nowPlayingMovies.results}
          type="movie"
        />
      )}
      {upcomingMovies && upcomingMovies.results && (
        <ItemsCarousel
          heading="UPCOMING MOVIES"
          results={upcomingMovies.results}
          type="movie"
        />
      )}
      {popularMovies && popularMovies.results && (
        <ItemsCarousel
          heading="POPULAR MOVIES"
          results={popularMovies.results}
          type="movie"
        />
      )}
      {topRatedMovies && topRatedMovies.results && (
        <ItemsCarousel
          heading="TOP RATED MOVIES"
          results={topRatedMovies.results}
          type="movie"
        />
      )}
    </>
  );
};

export default Movies;
