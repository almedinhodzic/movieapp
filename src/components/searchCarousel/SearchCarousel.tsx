import React from "react";
import { Link } from "react-router-dom";
import "./SearchCarousel.scss";

type Props = {
  id: number;
  name?: string | null;
  title?: string | null;
  posterImage: string | null;
  mediaType: string;
  profileImage?: string | null;
};

const SearchCarousel: React.FC<Props> = ({
  id,
  name,
  title,
  posterImage,
  mediaType,
  profileImage,
}: Props) => {
  return (
    <>
      <Link
        to={`/${mediaType === "person" ? "actor" : mediaType}/${id}`}
        className="search-carousel-content-poster"
      >
        <img
          src={`https://image.tmdb.org/t/p/w185/${posterImage || profileImage}`}
          alt="poster"
          className="search-carousel-content-poster__image"
        />
        <p className="search-carousel-content-poster__title">{title || name}</p>
      </Link>
    </>
  );
};

SearchCarousel.defaultProps = {
  name: null,
  title: null,
  profileImage: null,
};

export default SearchCarousel;
