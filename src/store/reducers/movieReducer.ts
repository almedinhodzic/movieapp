import {
  GET_UPCOMING_MOVIES,
  GET_NOW_PLAYING_MOVIES,
  GET_POPULAR_MOVIES,
  GET_TOP_RATED_MOVIES,
  GET_SIMILAR_MOVIES,
  GET_MOVIE_ACTORS,
  GET_GENRES,
  GET_MOVIE_BY_ID,
  GET_TRAILERS,
  GET_TRENDING_MOVIES,
  SET_MOVIE_ERROR,
  SET_MOVIE_LOADING,
  REMOVE_MOVIE_LOADING,
  MovieState,
  MoviesAction,
} from "../actions/movieTypes";

const initialState: MovieState = {
  upcomingMovies: null,
  popularMovies: null,
  nowPlayingMovies: null,
  topRatedMovies: null,
  multiSearch: null,
  trendingMovies: null,
  genreList: null,
  trendingHomePage: null,
  singleMovie: null,
  similarMovies: null,
  movieTrailers: null,
  movieActors: null,
  loading: false,
  error: "",
};

const movieReducer = (
  state = initialState,
  action: MoviesAction
): MovieState => {
  switch (action.type) {
    case GET_UPCOMING_MOVIES:
      return {
        ...state,
        upcomingMovies: action.payload,
        error: "",
      };
    case GET_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: action.payload,
        error: "",
      };
    case GET_NOW_PLAYING_MOVIES:
      return {
        ...state,
        nowPlayingMovies: action.payload,
        error: "",
      };
    case GET_TOP_RATED_MOVIES:
      return {
        ...state,
        topRatedMovies: action.payload,
        error: "",
      };
    case GET_SIMILAR_MOVIES:
      return {
        ...state,
        similarMovies: action.payload,
        error: "",
      };
    case GET_MOVIE_ACTORS:
      return {
        ...state,
        movieActors: action.payload,
        error: "",
      };
    case GET_GENRES:
      return {
        ...state,
        genreList: action.payload,
        error: "",
      };
    case GET_MOVIE_BY_ID:
      return {
        ...state,
        singleMovie: action.payload,
        error: "",
      };
    case GET_TRAILERS:
      return {
        ...state,
        movieTrailers: action.payload,
        error: "",
      };
    case GET_TRENDING_MOVIES:
      return {
        ...state,
        trendingMovies: action.payload,
        error: "",
      };
    case SET_MOVIE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case REMOVE_MOVIE_LOADING:
      return {
        ...state,
        loading: false,
      };
    case SET_MOVIE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
