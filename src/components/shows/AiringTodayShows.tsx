import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAiringTodayShows } from "../../store/actions/showActions";
import { RootState } from "../../store";
import SearchCarousel from "../searchCarousel/SearchCarousel";

const AiringTodayShows: React.FC = () => {
  const dispatch = useDispatch();
  const airingToday = useSelector(
    (state: RootState) => state.shows.airingTodayShows
  );
  useEffect(() => {
    dispatch(getAiringTodayShows());
  }, [dispatch]);
  return (
    <div className="search-carousel">
      <h1 className="search-carousel__heading">AIRING TODAY</h1>
      <div className="search-carousel-content">
        {airingToday?.results.map((item) => {
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

export default AiringTodayShows;
