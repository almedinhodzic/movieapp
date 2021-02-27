import React, { useRef } from "react";
import "./MovieCarousel.scss";

interface Genre {
  name: string;
  id: number;
}

type Props = {
  posterImage: string | null;
  backgroundImage: string | null;
  title: string;
  status: string;
  rating: number;
  genre: Genre[];
};

const MovieCarousel: React.FC<Props> = ({
  posterImage,
  backgroundImage,
  title,
  status,
  rating,
  genre,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const scrollToContent = () => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetHeight,
        left: 0,
        behavior: "smooth",
      });
    }
  };
  return (
    <div
      className="movie-section"
      ref={ref}
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("https://image.tmdb.org/t/p/original/${backgroundImage}") no-repeat`,
      }}
    >
      <button
        className="movie-section-btn"
        type="button"
        onClick={scrollToContent}
      >
        <i className="fas fa-chevron-down movie-section-btn__icon" />
      </button>
      <div className="movie-section-poster">
        <img
          src={`https://image.tmdb.org/t/p/w185${posterImage}`}
          className="movie-section-poster__image"
          alt=""
        />
        <div className="movie-section-poster-content">
          <h4 className="movie-section-poster-content__desc">
            {status.toUpperCase()}
          </h4>
          <h1 className="movie-section-poster-content__heading">{title}</h1>
          <p className="movie-section-poster-content__info">
            {genre[0].name.toUpperCase()} | {rating} RATING
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCarousel;
