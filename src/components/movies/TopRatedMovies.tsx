import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopRatedMovies } from "../../store/actions/movieActions";
import { RootState } from "../../store";
import SearchCarousel from "../searchCarousel/SearchCarousel";

const TopRatedMovies: React.FC = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector(
    (state: RootState) => state.movies.topRatedMovies
  );
  useEffect(() => {
    dispatch(getTopRatedMovies());
  }, [dispatch]);
  return (
    <div className="search-carousel">
      <h1 className="search-carousel__heading">TOP RATED MOVIES</h1>
      <div className="search-carousel-content">
        {topRatedMovies?.results.map((item) => {
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

export default TopRatedMovies;
