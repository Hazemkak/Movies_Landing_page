// import types
import { MovieTypes } from "../types/movie.types";

// **  Initial State
const initialState = {
  loading: true,
  movies: [],
  page: 1,
  total_pages: 1,
};

const subProjectReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    // LIST SUB PROJECTS
    case MovieTypes.UPDATE_MOVIES:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default subProjectReducer;
