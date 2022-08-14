// ** Redux Imports
import { combineReducers } from "redux";

// ** Reducers Imports
import movie from "./movie.reducer";

// export root reducer
const rootReducer = combineReducers({
  movie,
});

export default rootReducer;
