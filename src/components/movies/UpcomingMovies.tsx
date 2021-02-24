import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUpcomingMovies } from "../../store/actions/movieActions";
import { RootState } from "../../store";
import SearchCarousel from "../searchCarousel/SearchCarousel";

const UpcomingMovies: React.FC = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector(
    (state: RootState) => state.movies.upcomingMovies
  );
  useEffect(() => {
    dispatch(getUpcomingMovies());
  }, [dispatch]);
  return (
    <div className="search-carousel">
      <h1 className="search-carousel__heading">UPCOMING MOVIES</h1>
      <div className="search-carousel-content">
        {upcomingMovies?.results.map((item) => {
          return (
            <SearchCarousel
              key={item.id}
              id={item.id}
              name={item.name}
              title={item.title}
              profileImage={item.profile_path}
              mediaType="movie"
              posterImage={item.poster_path}
            />
          );
        })}
      </div>
    </div>
  );
};

export default UpcomingMovies;
