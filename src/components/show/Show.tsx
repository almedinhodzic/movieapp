import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../store";
import { getShow, clearShow } from "../../store/actions/showActions";
import ItemsCarousel from "../layout/ItemsCarousel";
import Trailers from "../trailers/Trailers";
import ShowCarousel from "./ShowCarousel";

interface ParamType {
  id: string;
}

const Show: React.FC = () => {
  const { id } = useParams<ParamType>();
  const dispatch = useDispatch();
  useEffect((): (() => void) => {
    dispatch(getShow(id));
    return () => dispatch(clearShow());
  }, [id, dispatch]);
  const show = useSelector((state: RootState) => state.shows.singleShow);
  const trailers = useSelector((state: RootState) => state.shows.showTrailers);
  const similarShows = useSelector(
    (state: RootState) => state.shows.similarShows
  );
  return (
    <>
      {show && (
        <ShowCarousel
          name={show.name}
          status={show.status}
          rating={show.vote_average}
          backgroundImage={show.backdrop_path}
          posterImage={show.poster_path}
          genre={show.genres}
        />
      )}
      <div className="movie-section-summary">
        <h4 className="movie-section-summary__heading">SUMMARY</h4>
        <p className="movie-section-summary__text">{show?.overview}</p>
      </div>
      {similarShows?.results && (
        <ItemsCarousel
          heading="SIMILAR TV SHOWS"
          results={similarShows.results}
          type="show"
        />
      )}
      {/* BECAUSE PROBLEMS WITH API, ACTORS WON'T BE SHOWN. */}
      {trailers && (
        <Trailers results={trailers.results} heading="TRAILERS FOR TV SHOW" />
      )}
    </>
  );
};

export default Show;
