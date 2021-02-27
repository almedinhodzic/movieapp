import React from "react";
import { Link } from "react-router-dom";

type Props = {
  id: number;
  posterImage: string | null;
  name?: string;
  title?: string;
  character: string;
  mediaType: string;
  summary: string;
};

const ActorMoviesShows: React.FC<Props> = ({
  id,
  posterImage,
  name,
  title,
  character,
  mediaType,
  summary,
}: Props) => {
  return (
    <div className="actor-section-roles">
      <div className="actor-section-roles-header">
        {posterImage && (
          <Link to={`/${mediaType}/${id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w185${posterImage}`}
              alt=""
              className="actor-section-roles-header__image"
            />
          </Link>
        )}
        <div className="actor-section-roles-header-infos">
          <Link
            to={`/${mediaType}/${id}`}
            className="actor-section-roles-header-infos__title"
          >
            {title || name}
          </Link>
          <h4 className="actor-section-roles-header-infos__char">
            {character}
          </h4>
        </div>
      </div>
      <p>{summary}</p>
    </div>
  );
};

ActorMoviesShows.defaultProps = {
  name: "",
  title: "",
};

export default ActorMoviesShows;
