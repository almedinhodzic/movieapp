export const GET_ACTOR_BY_ID = "GET_ACTOR_BY_ID";
export const GET_ACTOR_MOVIES_SHOWS = "GET_ACTOR_MOVIES_SHOWS";
export const GET_POPULAR_ACTORS = "GET_POPULAR_ACTORS";
export const SET_ACTORS_LOADING = "SET_ACTORS_LOADING";
export const REMOVE_ACTORS_LOADING = "REMOVE_ACTORS_LOADING";
export const SET_ACTORS_ERROR = "SET_ACTORS_ERROR";

export interface ActorInfos {
  name: string;
  birthday: string;
  known_for_department: string;
  deathday: string | null;
  biography: string;
  profile_path: string | null;
}

export interface ActorCast {
  overview: string;
  title?: string;
  name?: string;
  poster_path: string | null;
  character: string;
  id: number;
  media_type: string;
  backdrop_path: string | null;
}

export interface ActorMoviesAndShows {
  cast: ActorCast[];
}

export interface PopularActorsResults {
  name: string;
  profile_path: string | null;
  id: number;
  media_type: string;
}

export interface PopularActors {
  results: PopularActorsResults[];
}

export interface ActorState {
  singleActor: ActorInfos | null;
  popularActors: PopularActors | null;
  actorMoviesAndShows: ActorMoviesAndShows | null;
  loading: boolean;
  error: string;
}

interface GetActorInfosAction {
  type: typeof GET_ACTOR_BY_ID;
  payload: ActorInfos;
}

interface GetPopularActorsAction {
  type: typeof GET_POPULAR_ACTORS;
  payload: PopularActors;
}

interface GetActorMoviesAndShowsAction {
  type: typeof GET_ACTOR_MOVIES_SHOWS;
  payload: ActorMoviesAndShows;
}

interface SetActorLoadingAction {
  type: typeof SET_ACTORS_LOADING;
}

interface RemoveActorLoadingAction {
  type: typeof REMOVE_ACTORS_LOADING;
}

interface SetActorErrorAction {
  type: typeof SET_ACTORS_ERROR;
  payload: string;
}

export type ActorAction =
  | GetActorInfosAction
  | GetPopularActorsAction
  | GetActorMoviesAndShowsAction
  | SetActorLoadingAction
  | RemoveActorLoadingAction
  | SetActorErrorAction;
