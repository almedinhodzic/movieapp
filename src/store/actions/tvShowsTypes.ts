import { TrailerResults } from "./movieTypes";

export const GET_AIRING_TODAY = "GET_AIRING_TODAY_SHOWS";
export const GET_POPULAR_SHOWS = "GET_POPULAR_SHOWS";
export const GET_ON_THE_AIR_SHOWS = "GET_ON_THE_AIR_SHOWS";
export const GET_TOP_RATED_SHOWS = "GET_TOP_RATED_SHOWS";
export const SHOW_GENRE_LIST = "SHOW_GENRE_LIST";
export const SHOW_TRAILERS = "SHOW_TRAILERS";
export const GET_SIMILAR_SHOWS = "GET_SIMILAR_SHOWS";
export const GET_SHOW_BY_ID = "GET_SHOW_BY_ID";
export const GET_SHOW_ACTORS = "GET_SHOW_ACTORS";

export interface ShowResults {
  backdrop_path: string | null;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  vote_average: number;
  vote_count: number;
}

export interface AiringTodayShows {
  page: number;
  results: ShowResults[];
}

export interface PopularShows {
  page: number;
  results: ShowResults[];
}

export interface OnTheAirShows {
  page: number;
  results: ShowResults[];
}

export interface TopRatedShows {
  page: number;
  results: ShowResults[];
}

export interface Genres {
  id: number;
  name: string;
}

export interface ShowGenres {
  genres: Genres[];
}

export interface ShowTrailers {
  id: number;
  results: TrailerResults[];
}

export interface SimilarShows {
  page: number;
  results: ShowResults[];
}

export interface CreatedBy {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string | null;
}

export interface Episode {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  still_path: string | null;
  vote_average: number;
  vote_count: number;
}

export interface Network {
  name: string;
  id: number;
  logo_path: string | null;
  origin_country: string;
}

export interface Seasons {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  posted_path: string | null;
  season_number: number;
}

export interface SingleShow {
  backdrop_path: string | null;
  created_by: CreatedBy[];
  episode_run_time: number[];
  first_air_date: string;
  genres: ShowGenres;
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: Episode[];
  name: string;
  next_episode_to_air: Episode[] | null;
  networks: Network;
}
