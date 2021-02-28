import React from "react";
import "./NotFound.scss";

const NotFound: React.FC = () => {
  return (
    <div className="not-found-section">
      <h1>404</h1>
      <h2>Ooops! Page not found.</h2>
      <p>
        Sorry, but the page you are looking for is not found. Please, make sure
        you have typed correct URL.
      </p>
    </div>
  );
};

export default NotFound;
