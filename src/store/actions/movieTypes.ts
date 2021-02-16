export const GET_UPCOMING_MOVIES = "GET_UPCOMING_MOVIES";
export const GET_POPULAR_MOVIES = "GET_POPULAR_MOVIES";
export const GET_NOW_PLAYING_MOVIES = "GET_NOW_PLAYING_MOVIES";
export const GET_TOP_RATED_MOVIES = "GET_TOP_RATED_MOVIES";
export const SET_LOADING = "SET_LOADING";
export const REMOVE_LOADING = "REMOVE_LOADING";
export const SEARCH_MOVIES = "SEARCH_MOVIES";
export const GET_TRENDING_MOVIES = "GET_TRENDING_MOVIES";
export const GET_MOVIE_BY_ID = "GET_MOVIE_BY_ID";
export const GET_SIMILAR_MOVIES = "GET_SIMILAR_MOVIES";
export const GET_GENRES = "GET_GENRES";
export const GET_TRAILERS = "GET_TRAILERS";
export const GET_MOVIE_ACTORS = "GET_MOVIE_ACTORS";
export const SET_ERROR = "SET_ERROR";

export interface Results {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface UpcomingMovies {
  dates: {
    minimum: string;
    maximum: string;
  };
  page: number;
  results: Results[];
}

export interface PopularMovies {
  page: number;
  results: Results[];
}

export interface NowPlayingMovies {
  dates: {
    minimum: string;
    maximum: string;
  };
  page: number;
  results: Results[];
}

export interface TopRatedMovies {
  page: number;
  results: Results[];
}

export interface MultiSearch {
  page: number;
  results: Results[];
}

export interface TrendingMovies {
  page: number;
  results: Results[];
}

export interface MovieGenres {
  id: number;
  name: string;
}

export interface ProductionCompanies {
  id?: number;
  logo_path?: string;
  name?: string;
  origin_county?: string;
}

export interface ProductionCountries {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguages {
  english_name: string;
  iso_3166_1: string;
  name: string;
}

export interface BelongsToCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

export interface SingleMovie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: BelongsToCollection[];
  budget: number;
  genres: MovieGenres[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompanies[];
  production_countries: ProductionCountries[];
  release_date: string;
  revenue: number;
  runtime: number;
  spolen_languages: SpokenLanguages[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface SimilarMovies {
  page: number;
  results: Results[];
}

export interface GenreList {
  genres: MovieGenres[];
}

export interface TrailerResults {
  id: number;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
}

export interface MovieTrailers {
  id: number;
  results: TrailerResults[];
}

export interface Cast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface MovieActors {
  id: number;
  cast: Cast[];
}

export interface MovieState {
  upcomingMovies: UpcomingMovies | null;
  popularMovies: PopularMovies | null;
  nowPlayingMovies: NowPlayingMovies | null;
  topRatedMovies: TopRatedMovies | null;
  multiSearch: MultiSearch | null;
  trendingMovies: TrendingMovies | null;
  genreList: GenreList | null;
  singleMovie: SingleMovie | null;
  similarMovies: SimilarMovies | null;
  movieTrailers: MovieTrailers | null;
  movieActorsL: MovieActors | null;
  loading: boolean;
  error: string;
}

interface GetUpcomingMoviesAction {
  type: typeof GET_UPCOMING_MOVIES;
  payload: UpcomingMovies;
}
interface GetPopularMoviesAction {
  type: typeof GET_POPULAR_MOVIES;
  payload: PopularMovies;
}

interface GetNowPlayingMoviesAction {
  type: typeof GET_NOW_PLAYING_MOVIES;
  payload: NowPlayingMovies;
}

interface GetTopRatedMovies {
  type: typeof GET_TOP_RATED_MOVIES;
  payload: TopRatedMovies;
}

interface GetMultiSearchMoviesAction {
  type: typeof SEARCH_MOVIES;
}

interface GetTrendingMoviesAction {
  type: typeof GET_TRENDING_MOVIES;
  payload: TrendingMovies;
}

interface GetGenreListAction {
  type: typeof GET_GENRES;
  payload: GenreList;
}

interface GetSingleMovieAction {
  type: typeof GET_MOVIE_BY_ID;
  payload: SingleMovie;
}

interface GetSimilarMoviesAction {
  type: typeof GET_SIMILAR_MOVIES;
  payload: SimilarMovies;
}

interface GetMovieTrailersAction {
  type: typeof GET_TRAILERS;
  payload: MovieTrailers;
}

interface GetMovieActorsAction {
  type: typeof GET_MOVIE_ACTORS;
  payload: MovieActors;
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
}

interface RemoveLoadingAction {
  type: typeof REMOVE_LOADING;
}

interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}

export type MoviesAction =
  | GetUpcomingMoviesAction
  | GetPopularMoviesAction
  | GetNowPlayingMoviesAction
  | GetTopRatedMovies
  | GetMultiSearchMoviesAction
  | GetTrendingMoviesAction
  | GetGenreListAction
  | GetSingleMovieAction
  | GetSimilarMoviesAction
  | GetMovieTrailersAction
  | GetMovieActorsAction
  | SetLoadingAction
  | RemoveLoadingAction
  | SetErrorAction;
