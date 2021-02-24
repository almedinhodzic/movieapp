import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOnTheAirShows } from "../../store/actions/showActions";
import { RootState } from "../../store";
import SearchCarousel from "../searchCarousel/SearchCarousel";

const OnTheAirShows: React.FC = () => {
  const dispatch = useDispatch();
  const onTheAir = useSelector((state: RootState) => state.shows.onTheAirShows);
  useEffect(() => {
    dispatch(getOnTheAirShows());
  }, [dispatch]);
  return (
    <div className="search-carousel">
      <h1 className="search-carousel__heading">ON THE AIR</h1>
      <div className="search-carousel-content">
        {onTheAir?.results.map((item) => {
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

export default OnTheAirShows;
