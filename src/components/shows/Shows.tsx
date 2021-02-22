import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShowsContent } from "../../store/actions/showActions";
import { RootState } from "../../store";
import BackgroundCarousel from "../layout/BackgroundCarousel";
import ItemsCarousel from "../layout/ItemsCarousel";

const Shows: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getShowsContent());
  }, [dispatch]);
  const trendingShows = useSelector(
    (state: RootState) => state.shows.trendingShows
  );
  const popularShows = useSelector(
    (state: RootState) => state.shows.popularShows
  );
  const onTheAirShows = useSelector(
    (state: RootState) => state.shows.onTheAirShows
  );
  const airingToday = useSelector(
    (state: RootState) => state.shows.airingTodayShows
  );
  const topRatedShows = useSelector(
    (state: RootState) => state.shows.topRatedShows
  );
  return (
    <>
      {trendingShows && trendingShows.results && (
        <BackgroundCarousel
          results={trendingShows.results}
          desc="TRENDING TV SHOWS"
        />
      )}
      {airingToday && airingToday.results && (
        <ItemsCarousel
          results={airingToday.results}
          heading="AIRING TODAY"
          type="show"
        />
      )}
      {onTheAirShows && onTheAirShows.results && (
        <ItemsCarousel
          results={onTheAirShows.results}
          heading="ON THE AIR"
          type="show"
        />
      )}
      {popularShows && popularShows.results && (
        <ItemsCarousel
          heading="POPULAR TV SHOWS"
          results={popularShows.results}
          type="show"
        />
      )}
      {topRatedShows && topRatedShows.results && (
        <ItemsCarousel
          heading="TOP RATED TV SHOWS"
          results={topRatedShows.results}
          type="show"
        />
      )}
    </>
  );
};

export default Shows;
