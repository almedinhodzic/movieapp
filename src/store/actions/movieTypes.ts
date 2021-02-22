export const GET_UPCOMING_MOVIES = "GET_UPCOMING_MOVIES";
export const GET_POPULAR_MOVIES = "GET_POPULAR_MOVIES";
export const GET_NOW_PLAYING_MOVIES = "GET_NOW_PLAYING_MOVIES";
export const GET_TOP_RATED_MOVIES = "GET_TOP_RATED_MOVIES";
export const SET_MOVIE_LOADING = "SET_LOADING";
export const REMOVE_MOVIE_LOADING = "REMOVE_LOADING";
export const SEARCH_MOVIES = "SEARCH_MOVIES";
export const GET_TRENDING_MOVIES = "GET_TRENDING_MOVIES";
export const GET_MOVIE_BY_ID = "GET_MOVIE_BY_ID";
export const GET_SIMILAR_MOVIES = "GET_SIMILAR_MOVIES";
export const GET_GENRES = "GET_GENRES";
export const GET_TRENDING_HOME_PAGE = "GET_TRENDING_HOME_PAGE";
export const GET_TRAILERS = "GET_TRAILERS";
export const GET_MOVIE_ACTORS = "GET_MOVIE_ACTORS";
export const SET_MOVIE_ERROR = "SET_MOVIE_ERROR";

export interface Results {
  backdrop_path?: string | null;
  genre_ids: number[];
  id: number;
  poster_path: string | null;
  title?: string;
  name?: string;
  vote_average: number;
  media_type: string;
}

export interface Genres {
  id: number;
  name: string;
}
export interface SpokenLanguages {
  name: string;
}

export interface TrailerResults {
  key?: string;
}

export interface Cast {
  id: number;
  name: string;
  profile_path: string | null;
}

export interface Movies {
  results: Results[];
}

export interface Trending {
  results: Results[];
}

export interface SingleMovie {
  backdrop_path: string | null;
  genres: Genres[];
  id: number;
  overview: string;
  poster_path: string | null;
  spoken_languages: SpokenLanguages[];
  status: string;
  title: string;
  vote_average: number;
}

export interface GenreList {
  genres: Genres[];
}

export interface MovieTrailers {
  results: TrailerResults[];
}

export interface MovieActors {
  cast: Cast[];
}

export interface TrendingHomePage {
  results: Results[];
}

export interface MovieState {
  upcomingMovies: Movies | null;
  popularMovies: Movies | null;
  nowPlayingMovies: Movies | null;
  topRatedMovies: Movies | null;
  multiSearch: Movies | null;
  trendingMovies: Trending | null;
  genreList: GenreList | null;
  singleMovie: SingleMovie | null;
  similarMovies: Movies | null;
  movieTrailers: MovieTrailers | null;
  movieActors: MovieActors | null;
  trendingHomePage: TrendingHomePage | null;
  loading: boolean;
  error: string;
}

interface GetUpcomingMoviesAction {
  type: typeof GET_UPCOMING_MOVIES;
  payload: Movies;
}
interface GetPopularMoviesAction {
  type: typeof GET_POPULAR_MOVIES;
  payload: Movies;
}

interface GetNowPlayingMoviesAction {
  type: typeof GET_NOW_PLAYING_MOVIES;
  payload: Movies;
}

interface GetTopRatedMoviesAction {
  type: typeof GET_TOP_RATED_MOVIES;
  payload: Movies;
}

interface GetMultiSearchMoviesAction {
  type: typeof SEARCH_MOVIES;
  payload: Movies;
}

interface GetTrendingMoviesAction {
  type: typeof GET_TRENDING_MOVIES;
  payload: Movies;
}

interface GetGenreListAction {
  type: typeof GET_GENRES;
  payload: GenreList;
}

interface GetTrendingHomePageAction {
  type: typeof GET_TRENDING_HOME_PAGE;
  payload: TrendingHomePage;
}

interface GetSingleMovieAction {
  type: typeof GET_MOVIE_BY_ID;
  payload: SingleMovie;
}

interface GetSimilarMoviesAction {
  type: typeof GET_SIMILAR_MOVIES;
  payload: Movies;
}

interface GetMovieTrailersAction {
  type: typeof GET_TRAILERS;
  payload: MovieTrailers;
}

interface GetMovieActorsAction {
  type: typeof GET_MOVIE_ACTORS;
  payload: MovieActors;
}

interface SetMovieLoadingAction {
  type: typeof SET_MOVIE_LOADING;
}

interface RemoveMovieLoadingAction {
  type: typeof REMOVE_MOVIE_LOADING;
}

interface SetMovieErrorAction {
  type: typeof SET_MOVIE_ERROR;
  payload: string;
}

export type MoviesAction =
  | GetUpcomingMoviesAction
  | GetPopularMoviesAction
  | GetNowPlayingMoviesAction
  | GetTopRatedMoviesAction
  | GetMultiSearchMoviesAction
  | GetTrendingMoviesAction
  | GetGenreListAction
  | GetSingleMovieAction
  | GetSimilarMoviesAction
  | GetMovieTrailersAction
  | GetMovieActorsAction
  | GetTrendingHomePageAction
  | SetMovieLoadingAction
  | RemoveMovieLoadingAction
  | SetMovieErrorAction;
