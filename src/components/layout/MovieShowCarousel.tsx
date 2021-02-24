import React from "react";
import "./MovieShowCarousel.scss";

const MovieShowCarousel: React.FC = () => {
  return (
    <div className="movie-show-section">
      <button className="movie-show-section__btn" type="button">
        <i className="fas fa-chevron-down" />
      </button>
      <div className="movie-show-section-poster" style={{}}>
        <div className="movie-show-section-poster-content">
          {/* <a href="">slika unutra</a> */}
          <div className="movie-show-section-poster-content-item">
            <h4 className="movie-show-section-poster-content-item__desc">
              desct
            </h4>
            {/* <a
              href=""
              className="movie-show-section-poster-content-item__heading"
            >
              Ime filma
            </a> */}
            <p className="movie-show-section-poster-content-item__info">
              rating i tip filma
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieShowCarousel;
