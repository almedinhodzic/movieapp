import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieContent } from "../../store/actions/movieActions";
import { RootState } from "../../store";
import MovieCarousel from "../layout/MovieCarousel";
import ActorsCarousel from "../actors/ActorsCarousel";
import ItemsCarousel from "../layout/ItemsCarousel";
import Trailers from "../trailers/Trailers";

interface ParamTypes {
  id: string;
}

const Movie: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams<ParamTypes>();
  useEffect(() => {
    dispatch(getMovieContent(id));
  }, [id, dispatch]);
  const movie = useSelector((state: RootState) => state.movies.singleMovie);
  const movieActors = useSelector(
    (state: RootState) => state.movies.movieActors
  );
  const similarMovies = useSelector(
    (state: RootState) => state.movies.similarMovies
  );
  const trailers = useSelector(
    (state: RootState) => state.movies.movieTrailers
  );
  return (
    <>
      {movie && (
        <MovieCarousel
          posterImage={movie.poster_path}
          backgroundImage={movie.backdrop_path}
          title={movie.title}
          genre={movie.genres}
          rating={movie.vote_average}
          status={movie.status}
        />
      )}
      <div className="movie-section-summary">
        <h4 className="movie-section-summary__heading">SUMMARY</h4>
        <p className="movie-section-summary__text">{movie?.overview}</p>
      </div>
      {movieActors && (
        <ActorsCarousel
          heading="ACTORS IN THIS MOVIE"
          cast={movieActors.cast}
          type="actor"
        />
      )}
      {similarMovies?.results && (
        <ItemsCarousel
          heading="SIMILAR MOVIES"
          results={similarMovies.results}
          type="movie"
        />
      )}
      {trailers?.results && (
        <Trailers results={trailers.results} heading="TRAILERS FOR MOVIE" />
      )}
    </>
  );
};

export default Movie;
