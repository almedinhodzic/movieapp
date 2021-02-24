import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularActors } from "../../store/actions/actorActions";
import { RootState } from "../../store";
import SearchCarousel from "../searchCarousel/SearchCarousel";

const PopularActors: React.FC = () => {
  const dispatch = useDispatch();
  const popularActors = useSelector(
    (state: RootState) => state.actors.popularActors
  );
  useEffect(() => {
    dispatch(getPopularActors());
  }, [dispatch]);
  return (
    <div className="search-carousel">
      <h1 className="search-carousel__heading">POPULAR ACTORS</h1>
      <div className="search-carousel-content">
        {popularActors?.results.map((item) => {
          return (
            <SearchCarousel
              key={item.id}
              id={item.id}
              name={item.name}
              profileImage={item.profile_path}
              mediaType="actor"
              posterImage={null}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PopularActors;
