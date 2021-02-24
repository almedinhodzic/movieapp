import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopRatedShows } from "../../store/actions/showActions";
import { RootState } from "../../store";
import SearchCarousel from "../searchCarousel/SearchCarousel";

const TopRatedTvShows: React.FC = () => {
  const dispatch = useDispatch();
  const topRatedShows = useSelector(
    (state: RootState) => state.shows.topRatedShows
  );
  useEffect(() => {
    dispatch(getTopRatedShows());
  }, [dispatch]);
  return (
    <div className="search-carousel">
      <h1 className="search-carousel__heading">TOP RATED TV SHOWS</h1>
      <div className="search-carousel-content">
        {topRatedShows?.results.map((item) => {
          return (
            <SearchCarousel
              key={item.id}
              id={item.id}
              name={item.name}
              title={item.title}
              profileImage={item.profile_path}
              mediaType="show"
              posterImage={item.poster_path}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TopRatedTvShows;
