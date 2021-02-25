import {
  Cast,
  Genres,
  SpokenLanguages,
  TrailerResults,
  Results,
  Trending,
} from "./movieTypes";

export const GET_AIRING_TODAY = "GET_AIRING_TODAY_SHOWS";
export const GET_POPULAR_SHOWS = "GET_POPULAR_SHOWS";
export const GET_ON_THE_AIR_SHOWS = "GET_ON_THE_AIR_SHOWS";
export const GET_TOP_RATED_SHOWS = "GET_TOP_RATED_SHOWS";
export const SHOW_GENRE_LIST = "SHOW_GENRE_LIST";
export const SHOW_TRAILERS = "SHOW_TRAILERS";
export const GET_SIMILAR_SHOWS = "GET_SIMILAR_SHOWS";
export const GET_TRENDING_SHOWS = "GET_TRENDING_SHOWS";
export const GET_SHOW_BY_ID = "GET_SHOW_BY_ID";
export const GET_SHOW_ACTORS = "GET_SHOW_ACTORS";
export const SET_SHOW_LOADING = "SET_SHOW_LOADING";
export const REMOVE_SHOW_LOADING = "REMOVE_SHOW_LOADING";
export const SET_SHOW_ERROR = "SET_SHOW_ERROR";

export interface Shows {
  results: Results[];
}

export interface ShowGenres {
  genres: Genres[];
}

export interface ShowTrailers {
  results: TrailerResults[];
}

export interface SingleShow {
  backdrop_path: string | null;
  first_air_date: string;
  genres: Genres[];
  id: number;
  languages: string[];
  name: string;
  status: string;
  overview: string;
  vote_average: number;
  spoken_languages: SpokenLanguages;
  poster_path: string | null;
}

export interface ShowActors {
  cast: Cast[];
}

export interface ShowState {
  airingTodayShows: Shows | null;
  popularShows: Shows | null;
  onTheAirShows: Shows | null;
  topRatedShows: Shows | null;
  trendingShows: Trending | null;
  showGenres: ShowGenres | null;
  similarShows: Shows | null;
  singleShow: SingleShow | null;
  showTrailers: ShowTrailers | null;
  showActors: ShowActors | null;
  loading: boolean;
  error: string;
}

interface GetAiringTodayShowsAction {
  type: typeof GET_AIRING_TODAY;
  payload: Shows;
}

interface GetPopularShowsAction {
  type: typeof GET_POPULAR_SHOWS;
  payload: Shows;
}

interface GetOnTheAirShowsAction {
  type: typeof GET_ON_THE_AIR_SHOWS;
  payload: Shows;
}

interface GetTopRatedShowsAction {
  type: typeof GET_TOP_RATED_SHOWS;
  payload: Shows;
}

interface GetTrendingShowsAction {
  type: typeof GET_TRENDING_SHOWS;
  payload: Shows;
}

interface GetGenreListShowsAction {
  type: typeof SHOW_GENRE_LIST;
  payload: ShowGenres;
}

interface GetSingleShowAction {
  type: typeof GET_SHOW_BY_ID;
  payload: SingleShow;
}

interface GetSimilarShowsAction {
  type: typeof GET_SIMILAR_SHOWS;
  payload: Shows;
}

interface GetShowTrailersAction {
  type: typeof SHOW_TRAILERS;
  payload: ShowTrailers;
}

interface GetShowActorsAction {
  type: typeof GET_SHOW_ACTORS;
  payload: ShowActors;
}

interface SetShowLoadingAction {
  type: typeof SET_SHOW_LOADING;
}

interface RemoveShowLoadingAction {
  type: typeof REMOVE_SHOW_LOADING;
}

interface SetShowErrorLoading {
  type: typeof SET_SHOW_ERROR;
  payload: string;
}

export type ShowAction =
  | GetAiringTodayShowsAction
  | GetPopularShowsAction
  | GetOnTheAirShowsAction
  | GetTopRatedShowsAction
  | GetTrendingShowsAction
  | GetGenreListShowsAction
  | GetSingleShowAction
  | GetSimilarShowsAction
  | GetShowTrailersAction
  | GetShowActorsAction
  | SetShowLoadingAction
  | RemoveShowLoadingAction
  | SetShowErrorLoading;
