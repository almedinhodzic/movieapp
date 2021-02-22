import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import Home from "./components/home/Home";
import Navbar from "./components/layout/Navbar";
import Movies from "./components/movies/Movies";
import Shows from "./components/shows/Shows";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movies" exact component={Movies} />
        <Route path="/shows" exact component={Shows} />
      </Switch>
    </Router>
  );
};

export default App;
