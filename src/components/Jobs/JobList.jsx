
import React ,{useState, useEffect}from 'react';
import Grid from '@mui/material/Grid';
import JobCard from './JobCard';
import Filters from '../Filters/Filter';
const JobList = ({ jobs }) => {
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [filterOptions, setFilterOptions] = useState({
    minExp: null,
    companyName: '',
    location: '',
    remote: '',
    techStack: '',
    role: '',
    minBasePay: ''
  });

  useEffect(() => {
    applyFilters();
  }, [jobs, filterOptions]);

  const applyFilters = () => {
    console.log("Applying Filters...");
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
    if (filterOptions.remote) {
      filteredJobs = filteredJobs.filter(job => job.remote && job.remote.toLowerCase() === filterOptions.remote.toLowerCase());
    }
    if (filterOptions.techStack) {
      filteredJobs = filteredJobs.filter(job => job.techStack && job.techStack.toLowerCase().includes(filterOptions.techStack.toLowerCase()));
    }
    if (filterOptions.role) {
      filteredJobs = filteredJobs.filter(job => job.role && job.role.toLowerCase().includes(filterOptions.role.toLowerCase()));
    }
    if (filterOptions.minBasePay) {
      filteredJobs = filteredJobs.filter(job => job.minBasePay && job.minBasePay >= filterOptions.minBasePay);
    }
    setFilteredJobs(filteredJobs);
  };
  

  const handleFilterChange = (filterName, value) => {
    console.log("Filter Name:", filterName);
    console.log("Filter Value:", value);
    setFilterOptions({ ...filterOptions, [filterName]: value });
  };
  
  return (
    <div className="job-list">
    <Filters filterOptions={filterOptions} onFilterChange={handleFilterChange} />
    <Grid container spacing={2}>
      {filteredJobs.map(job => (
        <Grid item xs={12} sm={6} md={3} key={job.jdUid}>
          <JobCard job={job} />
        </Grid>
      ))}
    </Grid>
  </div>
  );
};
  
export default JobList ;
