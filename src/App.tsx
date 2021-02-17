import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { getPopularMovies } from "./store/actions/movieActions";
import "./App.scss";

const App: React.FC = () => {
  const data = useSelector((state: RootState) => state.movies.popularMovies);
  const dispatch = useDispatch();
  const onClick = (): void => {
    dispatch(getPopularMovies());
  };
  return (
    <div>
      <h1>Almedins Webpack!</h1>
      <button onClick={onClick} type="button">
        Get Data
      </button>
      <div>{data && data.results.map((item) => item.title)}</div>
    </div>
  );
};

export default App;
