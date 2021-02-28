import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Results } from "../../store/actions/movieTypes";
import "./ItemsCarousel.scss";

type Props = {
  heading: string;
  results: Results[];
  type: string;
};

const ItemsCarousel: React.FC<Props> = ({ heading, results, type }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const onLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        top: 0,
        left: -300,
        behavior: "smooth",
      });
    }
  };
  const onRight = () => {
    if (scrollRef.current !== null) {
      scrollRef.current.scrollBy({
        top: 0,
        left: 300,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="items-slider-section">
      {results && (
        <>
          <button
            className="items-slider-section-button items-slider-section-button__left"
            onClick={onLeft}
            type="button"
          >
            <i className="fas fa-chevron-left items-slider-section-button__left__icon" />
          </button>
          <h3 className="items-slider-section-heading">{heading}</h3>
          <div className="items-slider-section-posters" ref={scrollRef}>
            {results.map((item) => {
              return (
                item.poster_path && (
                  <Link
                    key={item.id}
                    className="items-slider-section-posters-poster"
                    to={
                      type === "movie"
                        ? `/movie/${item.id}`
                        : `/show/${item.id}`
                    }
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w185/${item.poster_path}`}
                      key={item.id}
                      alt=""
                      className="items-slider-section-posters-poster__image"
                    />
                    <div className="items-slider-section-posters-poster__icon">
                      {item.vote_average} <i className="fas fa-star" />
                    </div>
                  </Link>
                )
              );
            })}
          </div>
          <button
            className="items-slider-section-button items-slider-section-button__right"
            onClick={onRight}
            type="button"
          >
            <i className="fas fa-chevron-right items-slider-section-button__right__icon" />
          </button>
          <div className="items-slider-section-line" />
        </>
      )}
    </div>
  );
};

export default ItemsCarousel;
