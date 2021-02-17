import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import {
  // GET_UPCOMING_MOVIES,
  GET_POPULAR_MOVIES,
  // GET_NOW_PLAYING_MOVIES,
  // GET_TOP_RATED_MOVIES,
  // SET_MOVIE_LOADING,
  // REMOVE_MOVIE_LOADING,
  // SEARCH_MOVIES,
  // GET_TRENDING_MOVIES,
  // GET_MOVIE_BY_ID,
  // GET_SIMILAR_MOVIES,
  // GET_GENRES,
  // GET_TRAILERS,
  // GET_MOVIE_ACTORS,
  // SET_MOVIE_ERROR,
  MoviesAction,
} from "./movieTypes";

export type MovieThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  MoviesAction
>;

const key = process.env.REACT_APP_KEY;
console.log(key);

export const getPopularMovies = (): MovieThunk => async (dispatch) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`
  );
  dispatch({
    type: GET_POPULAR_MOVIES,
    payload: res.data,
  });
};
