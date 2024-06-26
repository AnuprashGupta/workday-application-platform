import { FETCH_JOBS_SUCCESS, FETCH_JOBS_FAILURE } from '../types';
const initialState = {
  jobs: [],
  error: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS_SUCCESS:
      return {
        ...state,
        jobs: [...state.jobs, ...action.payload], // Append new jobs to existing ones
        error: null
      };
    case FETCH_JOBS_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;
