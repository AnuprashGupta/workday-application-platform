import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import JobCard from './JobCard';
import Filters from '../Filters/Filter';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';
import { fetchJobs } from '../../redux/actions/actions';
const JobList = ({ }) => {
  const dispatch = useDispatch();
  const jobs = useSelector(state => state.jobs);
  const error = useSelector(state => state.error);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filterOptions, setFilterOptions] = useState({
    minExp: null,
    companyName: '',
    location: '',
    remote: '',
    techStack: '',
    role: '',
    minBasePay: ''
  });
  const [loading, setLoading] = useState(false);
  const [noMoreJobs, setNoMoreJobs] = useState(false);
  const theme = useTheme();
  useEffect(() => {
    dispatch(fetchJobs()); // Fetch initial jobs
  }, [dispatch]);

  useEffect(() => {
    setFilteredJobs(jobs);
    setLoading(false);
  }, [jobs]);

  useEffect(() => {
    applyFilters();
  }, [jobs, filterOptions]);

  const applyFilters = () => {
    let filteredJobs = jobs;
    if (filterOptions.minExp) {
      filteredJobs = filteredJobs.filter(job => job.minExp && job.minExp >= filterOptions.minExp);
    }
    if (filterOptions.companyName) {
      filteredJobs = filteredJobs.filter(job => job.companyName && job.companyName.toLowerCase().includes(filterOptions.companyName.toLowerCase()));
    }
    if (filterOptions.location) {
      filteredJobs = filteredJobs.filter(job => job.location && job.location.toLowerCase().includes(filterOptions.location.toLowerCase()));
    }
    if (filterOptions.remote === "remote") {
      filteredJobs = filteredJobs.filter(job => job.location && job.location.toLowerCase() === filterOptions.remote.toLowerCase());
    } else if (filterOptions.remote === "onsite") {
      filteredJobs = filteredJobs.filter(job => job.location && job.location.toLowerCase() !== filterOptions.remote.toLowerCase());
    }
    if (filterOptions.techStack) {
      filteredJobs = filteredJobs.filter(job => job.techStack && job.techStack.toLowerCase().includes(filterOptions.techStack.toLowerCase()));
    }
    if (filterOptions.role) {
      filteredJobs = filteredJobs.filter(job => job.jobRole && job.jobRole.toLowerCase().includes(filterOptions.role.toLowerCase()));
    }
    if (filterOptions.minBasePay) {
      filteredJobs = filteredJobs.filter(job => job.minJdSalary && job.minJdSalary >= filterOptions.minBasePay);
    }
    setFilteredJobs(filteredJobs);
  };


  const handleFilterChange = (filterName, value) => {
    setFilterOptions({ ...filterOptions, [filterName]: value });
  };
  const handleScroll = () => {
    if (
      !loading &&
      !noMoreJobs &&
      window.innerHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight - 20
    ) {
      setLoading(true); // Set loading state to true
      dispatch(fetchJobs(filteredJobs.length, 10))
        .then(() => setLoading(false)) // Turn off loading when jobs are fetched
        .catch(() => setLoading(false)); // Turn off loading in case of error
    }
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [filteredJobs, loading, noMoreJobs]);
  return (
    <div className="job-list" style={{ padding: "2%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <Filters filterOptions={filterOptions} onFilterChange={handleFilterChange} />
      <Grid container spacing={2}>
        {filteredJobs.map(job => (
          <Grid item xs={12} sm={6} md={3} key={job.jdUid}>
            <JobCard key={job.jdUid} job={job} />
          </Grid>
        ))}


      </Grid>
      {loading && <CircularProgress style={{ marginTop: '1%' }} />}
      {error && <div>Error fetching jobs. Please try again.</div>}
      {!loading && !error && filteredJobs.length === 0 && <div>No more jobs to fetch.</div>}
      <style jsx>{`
      @media (max-width: ${theme.breakpoints.values.md}px) {
        .job-list .MuiGrid-item {
          flex-basis: 50% !important;
        }
      }
    `}</style>
    </div>
  );
};

export default JobList;