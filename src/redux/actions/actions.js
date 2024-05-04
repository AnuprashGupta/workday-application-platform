import { FETCH_JOBS_SUCCESS, FETCH_JOBS_FAILURE } from '../types';
export const fetchJobs = () => async dispatch => {
  try {
    const response = await fetch('https://api.weekday.technology/adhoc/getSampleJdJSON', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ limit: 10, offset: 0 })
    });
    if (!response.ok) {
      throw new Error('Failed to fetch jobs');
    }
    const data = await response.json();
    dispatch({
      type: FETCH_JOBS_SUCCESS,
      payload: data.jdList 
    });
  } catch (error) {
    dispatch({
      type: FETCH_JOBS_FAILURE,
      payload: error.message
    });
  }
};