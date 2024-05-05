import React ,{useState, useEffect}from 'react';
import Grid from '@mui/material/Grid';
import JobCard from './JobCard';
import Filters from '../Filters/Filter';
import { useTheme } from '@mui/material/styles';
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
  const theme = useTheme();
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
    console.log("Filter Name:", filterName);
    console.log("Filter Value:", value);
    setFilterOptions({ ...filterOptions, [filterName]: value });
  };
  
  return (
    <div className="job-list" style={{padding:"2%"}}>
    <Filters filterOptions={filterOptions} onFilterChange={handleFilterChange} />
    <Grid container spacing={2}>
      {filteredJobs.map(job => (
        <Grid item xs={12} sm={6} md={3} key={job.jdUid}>
          <JobCard job={job} />
        </Grid>
      ))}
    </Grid>

    {/* Media Query for smaller screens */}
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
  
export default JobList ;