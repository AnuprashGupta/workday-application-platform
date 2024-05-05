// JobList.js

import React, { useState, useEffect, useRef } from 'react';
import Grid from '@mui/material/Grid';
import JobCard from './JobCard';
import Filters from '../Filters/Filter';
import { fetchJobs } from '../../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';

const JobList = () => {
  const [filterOptions, setFilterOptions] = useState({
    minExp: null,
    companyName: '',
    location: '',
    remote: '',
    techStack: '',
    role: '',
    minBasePay: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const jobs = useSelector(state => state.jobs);
  const lastJobCardRef = useRef(null);
  const limit = 10; // Change the limit as needed

  useEffect(() => {
    dispatch(fetchJobs(limit, 0)); // Fetch initial jobs
  }, [dispatch, limit]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, { threshold: 0.5 });
    if (lastJobCardRef.current) {
      observer.observe(lastJobCardRef.current);
    }
    return () => {
      if (lastJobCardRef.current) {
        observer.unobserve(lastJobCardRef.current);
      }
    };
  }, [lastJobCardRef]);

  const handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      // Load more jobs
      setCurrentPage(currentPage + 1);
      dispatch(fetchJobs(limit, currentPage * limit));
    }
  };

  const handleFilterChange = (filterName, value) => {
    setFilterOptions({ ...filterOptions, [filterName]: value });
    setCurrentPage(1); // Reset page when filter changes
    dispatch(fetchJobs(limit, 0)); // Fetch jobs with reset offset
  };

  return (
    <div className="job-list">
      <Filters filterOptions={filterOptions} onFilterChange={handleFilterChange} />
      <Grid container spacing={2}>
        {jobs.map((job, index) => (
          <Grid item xs={12} sm={6} md={3} key={job.jdUid}>
            <JobCard job={job} />
            {index === jobs.length - 1 ? <div ref={lastJobCardRef} /> : null}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default JobList;
