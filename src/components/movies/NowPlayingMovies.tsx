import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNowPlayingMovies } from "../../store/actions/movieActions";
import { RootState } from "../../store";
import SearchCarousel from "../searchCarousel/SearchCarousel";

const NowPlayingMovies: React.FC = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (state: RootState) => state.movies.nowPlayingMovies
  );
  useEffect(() => {
    dispatch(getNowPlayingMovies());
  }, [dispatch]);
  return (
    <div className="search-carousel">
      <h1 className="search-carousel__heading">NOW PLAYING MOVIES</h1>
      <div className="search-carousel-content">
        {nowPlayingMovies?.results.map((item) => {
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

export default NowPlayingMovies;
