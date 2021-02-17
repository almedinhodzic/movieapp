import {
  GET_ACTOR_BY_ID,
  GET_ACTOR_MOVIES_SHOWS,
  GET_POPULAR_ACTORS,
  SET_ACTORS_LOADING,
  SET_ACTORS_ERROR,
  REMOVE_ACTORS_LOADING,
  ActorState,
  ActorAction,
} from "../actions/actorsTypes";

const initialState: ActorState = {
  singleActor: null,
  popularActors: null,
  actorMoviesAndShows: null,
  loading: false,
  error: "",
};

const actorReducer = (
  state = initialState,
  action: ActorAction
): ActorState => {
  switch (action.type) {
    case GET_ACTOR_BY_ID:
      return {
        ...state,
        singleActor: action.payload,
        error: "",
      };
    case GET_ACTOR_MOVIES_SHOWS:
      return {
        ...state,
        error: "",
        actorMoviesAndShows: action.payload,
      };
    case GET_POPULAR_ACTORS:
      return {
        ...state,
        popularActors: action.payload,
        error: "",
      };
    case SET_ACTORS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case REMOVE_ACTORS_LOADING:
      return {
        ...state,
        loading: false,
      };
    case SET_ACTORS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default actorReducer;
