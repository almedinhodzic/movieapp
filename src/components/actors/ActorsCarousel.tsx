import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Cast } from "../../store/actions/movieTypes";

type Props = {
  heading: string;
  cast: Cast[];
};

const ActorsCarousel: React.FC<Props> = ({ heading, cast }: Props) => {
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
      {cast && (
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
            {cast.map((item) => {
              return (
                <Link
                  key={Math.random() * 10000}
                  className="items-slider-section-posters-poster"
                  to={`/actor/${item.id}`}
                >
                  {item.poster_path ||
                    (item.profile_path && (
                      <>
                        <img
                          src={`https://image.tmdb.org/t/p/w185/${
                            item.profile_path || item.poster_path
                          }`}
                          alt=""
                          className="items-slider-section-posters-poster__image"
                        />
                        <div className="items-slider-section-posters-poster__name">
                          {item.name}
                        </div>
                      </>
                    ))}
                </Link>
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

export default ActorsCarousel;
