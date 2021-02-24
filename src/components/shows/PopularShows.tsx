import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularShows } from "../../store/actions/showActions";
import { RootState } from "../../store";
import SearchCarousel from "../searchCarousel/SearchCarousel";

const PopularShows: React.FC = () => {
  const dispatch = useDispatch();
  const popularShows = useSelector(
    (state: RootState) => state.shows.popularShows
  );
  useEffect(() => {
    dispatch(getPopularShows());
  }, [dispatch]);
  return (
    <div className="search-carousel">
      <h1 className="search-carousel__heading">POPULAR TV SHOWS</h1>
      <div className="search-carousel-content">
        {popularShows?.results.map((item) => {
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

export default PopularShows;
