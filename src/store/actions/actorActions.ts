import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { movieDB, apiKey } from "../../api/movieDB";
import {
  GET_ACTOR_BY_ID,
  GET_ACTOR_MOVIES_SHOWS,
  GET_POPULAR_ACTORS,
  SET_ACTORS_ERROR,
  SET_ACTORS_LOADING,
  REMOVE_ACTORS_LOADING,
  ActorAction,
} from "./actorsTypes";

export type ActorThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  ActorAction
>;

export const setActorError = (errorMsg: string): ActorAction => {
  return {
    type: SET_ACTORS_ERROR,
    payload: errorMsg,
  };
};

export const setActorLoading = (): ActorAction => {
  return {
    type: SET_ACTORS_LOADING,
  };
};

export const removeActorLoading = (): ActorAction => {
  return {
    type: REMOVE_ACTORS_LOADING,
  };
};

export const getActorById = (id: number): ActorThunk => async (dispatch) => {
  try {
    const res = await movieDB.get(
      `person/${id}?api_key=${apiKey}&language=en-US`
    );
    dispatch({
      type: GET_ACTOR_BY_ID,
      payload: res.data,
    });
  } catch (error) {
    dispatch(setActorError(error.response.data.status_message));
  }
};

export const getActorMoviesShows = (id: number): ActorThunk => async (
  dispatch
) => {
  try {
    const res = await movieDB.get(
      `person/${id}/combined_credits?api_key=${apiKey}&language=en-US`
    );
    dispatch({
      type: GET_ACTOR_MOVIES_SHOWS,
      payload: res.data,
    });
  } catch (error) {
    dispatch(setActorError(error.response.data.status_message));
  }
};

export const getPopularActors = (): ActorThunk => async (dispatch) => {
  try {
    const res = await movieDB.get(
      `person/popular?api_key=${apiKey}&language=en-US&page=1`
    );
    dispatch({
      type: GET_POPULAR_ACTORS,
      payload: res.data,
    });
  } catch (error) {
    dispatch(setActorError(error.response.data.status_message));
  }
};
