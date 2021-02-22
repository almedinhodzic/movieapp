import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Results } from "../../store/actions/movieTypes";
import "./BackgroundCarousel.scss";

type Props = {
  results: Results[];
  desc: string;
};

const BackgroundCarousel: React.FC<Props> = ({ results, desc }: Props) => {
  const [current, setCurrent] = useState(0);
  const { length } = results;
  const nextSlide = (): void => {
    setCurrent(current === length ? 0 : current + 1);
  };
  const prevSlide = (): void => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
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

  useEffect(() => {
    const timeout = setTimeout(() => {
      nextSlide();
    }, 15000);
    return () => clearTimeout(timeout);
  });

  return (
    <div className="slider-section" ref={ref}>
      <button
        className="slider-section-btn slider-section-btn__left"
        onClick={prevSlide}
        type="button"
      >
        <i className="fas fa-chevron-left" />
      </button>
      <button
        className="slider-section-btn slider-section-btn__right"
        onClick={nextSlide}
        type="button"
      >
        <i className="fas fa-chevron-right" />
      </button>
      <button
        className="slider-section-btn slider-section-btn__down"
        onClick={scrollToContent}
        type="button"
      >
        <i className="fas fa-chevron-down slider-section-btn slider-section-btn__down__icon" />
      </button>
      {results.map((item, index) => {
        return (
          <div
            className={
              index === current
                ? "slider-section-slide-active"
                : "slider-section-slide"
            }
            key={item.id}
          >
            {index === current && (
              <div
                style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("https://image.tmdb.org/t/p/original${item.backdrop_path}") no-repeat`,
                  backgroundSize: "cover",
                }}
                className="slider-section-slide-main"
              >
                <div className="slider-section-slide-main-content">
                  <Link
                    to={
                      item.media_type === "movie"
                        ? "/details/movie"
                        : "/details/show"
                    }
                    className="slider-section-slide-main-content-item"
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w185${item.poster_path}`}
                      alt=""
                      className="slider-section-slide-main-content-item__image"
                    />
                  </Link>
                  <div className="slider-section-slide-main-content-item">
                    <h4 className="slider-section-slide-main-content-item__desc">
                      {desc}
                    </h4>
                    <Link
                      to={
                        item.media_type === "movie"
                          ? "/details/movie"
                          : "/details/show"
                      }
                      className="slider-section-slide-main-content-item__heading"
                    >
                      {item.title || item.name}
                    </Link>
                    <p className="slider-section-slide-main-content-item__info">
                      Action | {item.vote_average} Rating
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BackgroundCarousel;
