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
  ShowAction,
  ShowState,
} from "../actions/tvShowsTypes";

const initialState: ShowState = {
  airingTodayShows: null,
  popularShows: null,
  onTheAirShows: null,
  topRatedShows: null,
  trendingShows: null,
  showGenres: null,
  similarShows: null,
  singleShow: null,
  showTrailers: null,
  showActors: null,
  loading: false,
  error: "",
};

const showReducer = (state = initialState, action: ShowAction): ShowState => {
  switch (action.type) {
    case GET_AIRING_TODAY:
      return {
        ...state,
        error: "",
        airingTodayShows: action.payload,
      };
    case GET_POPULAR_SHOWS:
      return {
        ...state,
        error: "",
        popularShows: action.payload,
      };
    case GET_ON_THE_AIR_SHOWS:
      return {
        ...state,
        error: "",
        onTheAirShows: action.payload,
      };
    case GET_TOP_RATED_SHOWS:
      return {
        ...state,
        error: "",
        topRatedShows: action.payload,
      };
    case SHOW_GENRE_LIST:
      return {
        ...state,
        error: "",
        showGenres: action.payload,
      };
    case SHOW_TRAILERS:
      return {
        ...state,
        error: "",
        showTrailers: action.payload,
      };
    case GET_SIMILAR_SHOWS:
      return {
        ...state,
        error: "",
        similarShows: action.payload,
      };
    case GET_TRENDING_SHOWS:
      return {
        ...state,
        error: "",
        trendingShows: action.payload,
      };
    case GET_SHOW_BY_ID:
      return {
        ...state,
        error: "",
        singleShow: action.payload,
      };
    case GET_SHOW_ACTORS:
      return {
        ...state,
        error: "",
        showActors: action.payload,
      };
    case SET_SHOW_LOADING:
      return {
        ...state,
        loading: true,
      };
    case REMOVE_SHOW_LOADING:
      return {
        ...state,
        loading: false,
      };
    case SET_SHOW_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default showReducer;
