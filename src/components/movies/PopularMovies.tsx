import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularMovies } from "../../store/actions/movieActions";
import { RootState } from "../../store";
import SearchCarousel from "../searchCarousel/SearchCarousel";

const PopularMovies: React.FC = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(
    (state: RootState) => state.movies.popularMovies
  );
  useEffect(() => {
    dispatch(getPopularMovies());
  }, [dispatch]);
  return (
    <div className="search-carousel">
      <h1 className="search-carousel__heading">POPULAR MOVIES</h1>
      <div className="search-carousel-content">
        {popularMovies?.results.map((item) => {
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

export default PopularMovies;
