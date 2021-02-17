import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import movieReducer from "./reducers/movieReducer";
import showReducer from "./reducers/showReducer";
import actorReducer from "./reducers/actorReducer";

const rootReducer = combineReducers({
  movies: movieReducer,
  shows: showReducer,
  actors: actorReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
