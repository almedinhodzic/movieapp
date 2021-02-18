import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [active, setActive] = useState(false);
  const onBurgerClick = (): void => {
    setActive(!active);
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="src\assets\logo.png" alt="" />
      </div>
      <ul className={`nav-links ${active ? "active" : ""}`}>
        <li>
          <Link to="/movies" className="link">
            MOVIES
          </Link>
        </li>
        <li>
          <Link to="/movies" className="link">
            TV SHOWS
          </Link>
        </li>
      </ul>
      <div
        className="burger active"
        onClick={onBurgerClick}
        onKeyDown={onBurgerClick}
        role="button"
        tabIndex={0}
      >
        <div className="line1" />
        <div className="line2" />
        <div className="line3" />
      </div>
    </nav>
  );
};

export default Navbar;
