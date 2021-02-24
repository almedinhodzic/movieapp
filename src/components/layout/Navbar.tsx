import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import useOnClickOutside from "./useOnClickOutside";
import "./Navbar.scss";
import Search from "../search/Search";

const Navbar: React.FC = () => {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const onBurgerClick = (): void => {
    setActive(!active);
  };
  const handleClickOutside = (): void => {
    setActive(false);
  };
  useOnClickOutside(ref, handleClickOutside);
  return (
    <nav className="main-nav" ref={ref}>
      <div className="main-nav-left-section">
        <Link to="/" className="main-nav-logo">
          <img
            src="\src\assets\logo.png"
            alt=""
            className="main-nav-logo__img"
          />
        </Link>
        <Search />
      </div>

      <ul className={`main-nav-links ${active ? "active" : ""}`}>
        <li>
          <Link to="/movies" className="main-nav-links__link">
            MOVIES
          </Link>
        </li>
        <li>
          <Link to="/shows" className="main-nav-links__link">
            TV SHOWS
          </Link>
        </li>
      </ul>
      <div
        className="main-nav-burger"
        onClick={onBurgerClick}
        onKeyDown={onBurgerClick}
        role="button"
        tabIndex={0}
      >
        <div
          className={`main-nav-burger__line1 ${
            active ? "main-nav-burger-toggle__line1" : ""
          }`}
        />
        <div
          className={`main-nav-burger__line2 ${
            active ? "main-nav-burger-toggle__line2" : ""
          }`}
        />
        <div
          className={`main-nav-burger__line3 ${
            active ? "main-nav-burger-toggle__line3" : ""
          }`}
        />
      </div>
    </nav>
  );
};

export default Navbar;
