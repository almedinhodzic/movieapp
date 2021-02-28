import { ThunkAction } from "redux-thunk";
import { movieDB, apiKey } from "../../api/movieDB";
import { RootState } from "..";
import {
  GET_AIRING_TODAY,
  GET_POPULAR_SHOWS,
  GET_ON_THE_AIR_SHOWS,
  GET_TOP_RATED_SHOWS,
  SHOW_GENRE_LIST,
  SHOW_TRAILERS,
  GET_SIMILAR_SHOWS,
  GET_TRENDING_SHOWS,
  GET_SHOW_BY_ID,
  GET_SHOW_ACTORS,
  SET_SHOW_LOADING,
  REMOVE_SHOW_LOADING,
  SET_SHOW_ERROR,
  CLEAR_SHOW,
  ShowAction,
} from "./tvShowsTypes";

export type ShowThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  ShowAction
>;

export const setShowError = (errorMsg: string): ShowAction => {
  return {
    type: SET_SHOW_ERROR,
    payload: errorMsg,
  };
};

export const setShowLoading = (): ShowAction => {
  return {
    type: SET_SHOW_LOADING,
  };
};

export const removeShowLoading = (): ShowAction => {
  return {
    type: REMOVE_SHOW_LOADING,
  };
};

export const clearShow = (): ShowAction => {
  return {
    type: CLEAR_SHOW,
  };
};

export const getAiringTodayShows = (): ShowThunk => async (dispatch) => {
  try {
    const res = await movieDB.get(
      `tv/airing_today?api_key=${apiKey}&language=en-US&page=1`
    );
    dispatch({
      type: GET_AIRING_TODAY,
      payload: res.data,
    });
  } catch (error) {
    dispatch(setShowError(error.response.data.status_message));
  }
};

export const getPopularShows = (): ShowThunk => async (dispatch) => {
  try {
    const res = await movieDB.get(
      `tv/popular?api_key=${apiKey}&language=en-US&page=1`
    );
    dispatch({
      type: GET_POPULAR_SHOWS,
      payload: res.data,
    });
  } catch (error) {
    dispatch(setShowError(error.response.data.status_message));
  }
};

export const getOnTheAirShows = (): ShowThunk => async (dispatch) => {
  try {
    const res = await movieDB.get(
      `tv/on_the_air?api_key=${apiKey}&language=en-US&page=1`
    );
    dispatch({
      type: GET_ON_THE_AIR_SHOWS,
      payload: res.data,
    });
  } catch (error) {
    dispatch(setShowError(error.response.data.status_message));
  }
};

export const getTopRatedShows = (): ShowThunk => async (dispatch) => {
  try {
    const res = await movieDB.get(
      `tv/top_rated?api_key=${apiKey}&language=en-US&page=1`
    );
    dispatch({
      type: GET_TOP_RATED_SHOWS,
      payload: res.data,
    });
  } catch (error) {
    dispatch(setShowError(error.response.data.status_message));
  }
};

export const getShowGenreList = (): ShowThunk => async (dispatch) => {
  try {
    const res = await movieDB.get(
      `genre/tv/list?api_key=${apiKey}&language=en-US`
    );
    dispatch({
      type: SHOW_GENRE_LIST,
      payload: res.data,
    });
  } catch (error) {
    dispatch(setShowError(error.response.data.status_message));
  }
};

export const getShowTrailers = (id: string): ShowThunk => async (dispatch) => {
  try {
    const res = await movieDB.get(
      `tv/${id}/videos?api_key=${apiKey}&language=en-US`
    );
    dispatch({
      type: SHOW_TRAILERS,
      payload: res.data,
    });
  } catch (error) {
    dispatch(setShowError(error.response.data.status_message));
  }
};

export const getSimilarShows = (id: string): ShowThunk => async (dispatch) => {
  try {
    const res = await movieDB.get(
      `tv/${id}/similar?api_key=${apiKey}&language=en-US&page=1`
    );
    dispatch({
      type: GET_SIMILAR_SHOWS,
      payload: res.data,
    });
  } catch (error) {
    dispatch(setShowError(error.response.data.status_message));
  }
};

export const getShowById = (id: string): ShowThunk => async (dispatch) => {
  try {
    const res = await movieDB.get(`tv/${id}?api_key=${apiKey}&language=en-US`);
    dispatch({
      type: GET_SHOW_BY_ID,
      payload: res.data,
    });
  } catch (error) {
    dispatch(setShowError(error.response.data.status_message));
  }
};

export const getTrendingShows = (): ShowThunk => async (dispatch) => {
  try {
    const res = await movieDB.get(`trending/tv/week?api_key=${apiKey}`);
    dispatch({
      type: GET_TRENDING_SHOWS,
      payload: res.data,
    });
  } catch (error) {
    dispatch(setShowError(error.response.data.status_message));
  }
};

export const getShowActors = (id: string): ShowThunk => async (dispatch) => {
  try {
    const res = await movieDB.get(
      `person/${id}/tv_credits?api_key=${apiKey}&language=en-US`
    );
    dispatch({
      type: GET_SHOW_ACTORS,
      payload: res.data,
    });
  } catch (error) {
    dispatch(setShowError(error.response.data.status_message));
  }
};

export const getShowsContent = (): ShowThunk => async (dispatch) => {
  dispatch(setShowLoading());
  dispatch(getTrendingShows());
  dispatch(getAiringTodayShows());
  dispatch(getOnTheAirShows());
  dispatch(getPopularShows());
  dispatch(getTopRatedShows());
  dispatch(removeShowLoading());
};

export const getShowsForHomePage = (): ShowThunk => async (dispatch) => {
  dispatch(setShowLoading());
  dispatch(getPopularShows());
  dispatch(getTopRatedShows());
  dispatch(removeShowLoading());
};

export const getShow = (id: string): ShowThunk => async (dispatch) => {
  dispatch(setShowLoading());
  dispatch(getShowById(id));
  dispatch(getShowTrailers(id));
  dispatch(getSimilarShows(id));
  dispatch(getShowActors(id));
  dispatch(removeShowLoading());
};
