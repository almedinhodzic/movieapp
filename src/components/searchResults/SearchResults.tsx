import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchMoviesAndShows } from "../../store/actions/movieActions";
import { RootState } from "../../store";
import SearchCarousel from "../searchCarousel/SearchCarousel";

interface ParamTypes {
  name: string;
}

const SearchResults: React.FC = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector(
    (state: RootState) => state.movies.multiSearch
  );
  const { name } = useParams<ParamTypes>();
  useEffect(() => {
    dispatch(searchMoviesAndShows(name));
  }, [name, dispatch]);
  return (
    <div className="search-carousel">
      <h1 className="search-carousel__heading">
        SEARCH RESULTS FOR {name.toUpperCase()}
      </h1>
      <div className="search-carousel__line" />
      {searchResults?.results.length === 0 && (
        <p className="search-carousel-not-found">No Results For Your Search</p>
      )}
      <div className="search-carousel-content">
        {searchResults?.results.map((item) => {
          return (
            <SearchCarousel
              key={item.id}
              id={item.id}
              posterImage={item.poster_path}
              title={item.title}
              name={item.name}
              mediaType={item.media_type}
              profileImage={item.profile_path}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SearchResults;
