import { FETCH_JOBS_SUCCESS, FETCH_JOBS_FAILURE } from '../types';

export const fetchJobs = (limit, offset) => async dispatch => {
  console.log("----------->> hitting")
  try {
    const response = await fetch('https://api.weekday.technology/adhoc/getSampleJdJSON', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ limit, offset })
    });

    if (!response.ok) {
      throw new Error('Failed to fetch jobs');
    }

    const data = await response.json();
    console.log("----------->> received data:", data);
    
    dispatch({
      type: FETCH_JOBS_SUCCESS,
      payload: data.jdList 
    });
    
    return data.jdList; 
  } catch (error) {
    dispatch({
      type: FETCH_JOBS_FAILURE,
      payload: error.message
    });
    throw error; 
  }
};