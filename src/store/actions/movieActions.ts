import { ThunkAction } from "redux-thunk";
import { movieDB, apiKey } from "../../api/movieDB";
import { RootState } from "..";
import {
  GET_UPCOMING_MOVIES,
  GET_POPULAR_MOVIES,
  GET_NOW_PLAYING_MOVIES,
  GET_TOP_RATED_MOVIES,
  SET_MOVIE_LOADING,
  REMOVE_MOVIE_LOADING,
  SEARCH_MOVIES,
  GET_TRENDING_MOVIES,
  GET_MOVIE_BY_ID,
  GET_SIMILAR_MOVIES,
  GET_GENRES,
  GET_TRAILERS,
  GET_MOVIE_ACTORS,
  SET_MOVIE_ERROR,
  GET_TRENDING_HOME_PAGE,
  MoviesAction,
} from "./movieTypes";

export type MovieThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  MoviesAction
>;

export const setMovieError = (errorMsg: string): MoviesAction => {
  return {
    type: SET_MOVIE_ERROR,
    payload: errorMsg,
  };
};

export const setMovieLoading = (): MoviesAction => {
  return {
    type: SET_MOVIE_LOADING,
  };
};

export const removeMovieLoading = (): MoviesAction => {
  return {
    type: REMOVE_MOVIE_LOADING,
  };
};

export const getUpcomingMovies = (): MovieThunk => async (dispatch) => {
  try {
    const res = await movieDB.get(
      `movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
    );
    dispatch({
      type: GET_UPCOMING_MOVIES,
      payload: res.data,
    });
  } catch (error) {
    dispatch(setMovieError(error.response.data.status_message));
  }
};

export const getPopularMovies = (): MovieThunk => async (dispatch) => {
  try {
    const res = await movieDB.get(
      `movie/popular?api_key=${apiKey}&language=en-US&page=1`
    );
    dispatch({
      type: GET_POPULAR_MOVIES,
      payload: res.data,
    });
  } catch (error) {
    dispatch(setMovieError(error.response.data.status_message));
  }
};

export const getTrendingHomePage = (): MovieThunk => async (dispatch) => {
  try {
    const res = await movieDB.get(`trending/all/week?api_key=${apiKey}`);
    dispatch({
      type: GET_TRENDING_HOME_PAGE,
      payload: res.data,
    });
  } catch (error) {
    dispatch(setMovieError(error.response.data.status_message));
  }
};

export const getNowPlayingMovies = (): MovieThunk => async (dispatch) => {
  try {
    const res = await movieDB.get(
      `movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
    );
    dispatch({
      type: GET_NOW_PLAYING_MOVIES,
      payload: res.data,
    });
  } catch (error) {
    dispatch(setMovieError(error.response.data.status_message));
  }
};

export const getTrendingMovies = (): MovieThunk => async (dispatch) => {
  try {
    const res = await movieDB.get(`/trending/movie/week?api_key=${apiKey}`);
    dispatch({
      type: GET_TRENDING_MOVIES,
      payload: res.data,
    });
  } catch (error) {
    dispatch(setMovieError(error.response.data.status_message));
  }
};

export const getTopRatedMovies = (): MovieThunk => async (dispatch) => {
  try {
    const res = await movieDB.get(
      `movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
    );
    dispatch({
      type: GET_TOP_RATED_MOVIES,
      payload: res.data,
    });
  } catch (error) {
    dispatch(setMovieError(error.response.data.status_message));
  }
};

export const searchMoviesAndShows = (name: string): MovieThunk => async (
  dispatch
) => {
  try {
    const res = await movieDB.get(`/search/multi?api_key=${apiKey}&language=en-US&query=${name}&page=1&include_adult=false
`);
    dispatch({
      type: SEARCH_MOVIES,
      payload: res.data,
    });
  } catch (error) {
    dispatch(setMovieError(error.response.data.status_message));
  }
};

export const getMovieById = (id: number): MovieThunk => async (dispatch) => {
  try {
    const res = await movieDB.get(
      `movie/${id}?api_key=${apiKey}&language=en-US`
    );
    dispatch({
      type: GET_MOVIE_BY_ID,
      payload: res.data,
    });
  } catch (error) {
    dispatch(setMovieError(error.response.data.status_message));
  }
};

export const getSimilarMovies = (id: number): MovieThunk => async (
  dispatch
) => {
  try {
    const res = await movieDB.get(
      `movie/${id}?api_key=${apiKey}&language=en-US`
    );
    dispatch({
      type: GET_SIMILAR_MOVIES,
      payload: res.data,
    });
  } catch (error) {
    dispatch(setMovieError(error.response.data.status_message));
  }
};

export const getMovieGenres = (): MovieThunk => async (dispatch) => {
  try {
    const res = await movieDB.get(
      `genre/movie/list?api_key=${apiKey}&language=en-US`
    );
    dispatch({
      type: GET_GENRES,
      payload: res.data,
    });
  } catch (error) {
    dispatch(setMovieError(error.response.data.status_message));
  }
};

export const getMovieActors = (id: number): MovieThunk => async (dispatch) => {
  try {
    const res = await movieDB.get(
      `movie/${id}/credits?api_key=${apiKey}&language=en-US`
    );
    dispatch({
      type: GET_MOVIE_ACTORS,
      payload: res.data,
    });
  } catch (error) {
    dispatch(setMovieError(error.response.data.status_message));
  }
};

export const getMovieTrailers = (id: number): MovieThunk => async (
  dispatch
) => {
  try {
    const res = await movieDB.get(
      `movie/${id}/videos?api_key=${apiKey}&language=en-US`
    );
    dispatch({
      type: GET_TRAILERS,
      payload: res.data,
    });
  } catch (error) {
    dispatch(setMovieError(error.response.data.status_message));
  }
};

export const getMoviesContent = (): MovieThunk => async (dispatch) => {
  dispatch(setMovieLoading());
  dispatch(getUpcomingMovies());
  dispatch(getPopularMovies());
  dispatch(getTopRatedMovies());
  dispatch(getNowPlayingMovies());
  dispatch(getTrendingMovies());
  dispatch(removeMovieLoading());
};

export const getMoviesForHomePage = (): MovieThunk => async (dispatch) => {
  dispatch(setMovieLoading());
  dispatch(getTrendingHomePage());
  dispatch(getPopularMovies());
  dispatch(getTopRatedMovies());
  dispatch(removeMovieLoading());
};
