import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getActor } from "../../store/actions/actorActions";
import { RootState } from "../../store";

import ActorBackground from "./ActorBackground";
import ActorMoviesShows from "./ActorMoviesShows";

interface ParamsType {
  id: string;
}

const Actor: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams<ParamsType>();
  useEffect(() => {
    dispatch(getActor(id));
  }, [id, dispatch]);
  const actor = useSelector((state: RootState) => state.actors.singleActor);
  const moviesShows = useSelector(
    (state: RootState) => state.actors.actorMoviesAndShows
  );
  return (
    <>
      {actor && moviesShows?.cast && (
        <ActorBackground
          profileImage={actor.profile_path}
          backgroundImage={moviesShows?.cast[0].backdrop_path}
          birthday={actor.birthday}
          deathday={actor.deathday}
          name={actor.name}
          department={actor.known_for_department}
        />
      )}
      {actor && (
        <div className="actor-section-bio">
          <h2 className="actor-section-bio__heading">Biography</h2>
          <p className="actor-section-bio__text">{actor.biography}</p>
        </div>
      )}
      <h2 className="actor-section-heading">Popular Roles</h2>
      {moviesShows?.cast.map((item) => (
        <ActorMoviesShows
          key={item.id}
          id={item.id}
          title={item.title}
          posterImage={item.poster_path}
          name={item.name}
          summary={item.overview}
          character={item.character}
          mediaType={item.media_type}
        />
      ))}
    </>
  );
};

export default Actor;
