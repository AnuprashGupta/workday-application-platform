import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from './redux/actions/actions';
import JobList from './components/Jobs/JobList';
function App() {
  const dispatch = useDispatch();
  const jobs = useSelector(state => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  return (
    <div className="App">
      <JobList jobs={jobs} />
    </div>
  );

}

export default App;
