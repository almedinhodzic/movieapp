import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-main-section">
        <div className="footer-main-section-movies">
          <h4>
            Movies <i className="fas fa-video" />
          </h4>
          <Link
            to="/movies/upcoming-movies"
            className="footer-main-section__link"
          >
            Upcoming Movies
          </Link>
          <Link
            to="/movies/now-playing-movies"
            className="footer-main-section__link"
          >
            Now Playing Movies
          </Link>
          <Link
            to="/movies/popular-movies"
            className="footer-main-section__link"
          >
            Popular Movies
          </Link>
          <Link
            to="/movies/top-rated-movies"
            className="footer-main-section__link"
          >
            Top Rated Movies
          </Link>
        </div>
        <div className="footer-main-section-shows">
          <h4>
            TV Shows <i className="fas fa-tv" />
          </h4>
          <Link
            to="/shows/airing-today-shows"
            className="footer-main-section__link"
          >
            Airing Today Shows
          </Link>
          <Link
            to="/shows/on-the-air-shows"
            className="footer-main-section__link"
          >
            On The Air Shows
          </Link>
          <Link to="/shows/popular-shows" className="footer-main-section__link">
            Popular Shows
          </Link>
          <Link
            to="/shows/top-rated-shows"
            className="footer-main-section__link"
          >
            Top Rated Shows
          </Link>
        </div>
        <div className="footer-main-section-actors">
          <h4>
            Actors <i className="fas fa-users" />
          </h4>
          <Link to="/actors" className="footer-main-section__link">
            Popular Actors Today
          </Link>
        </div>
        <div className="footer-main-section-logo">
          <h4>
            Powered By <i className="fas fa-level-down-alt" />
          </h4>
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            className="footer-main-section__link"
            rel="noreferrer"
          >
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
              alt="movie db logo"
            />
          </a>
        </div>
      </div>
      <a
        href="https://www.linkedin.com/in/almedin-hodzic-171a3b203/"
        target="_blank"
        className="footer-main-section__link footer-main-section__link__name"
        rel="noreferrer"
      >
        Copyright&copy; Almedin Hodzic, 2021
      </a>
    </footer>
  );
};

export default Footer;
