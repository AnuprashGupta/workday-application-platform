
import React from 'react';
import Grid from '@mui/material/Grid';
import JobCard from './JobCard';

const JobList = ({ jobs }) => {
  return (
    <Grid container spacing={2}>
      {jobs.map(job => (
        <Grid item key={job.jdUid} xs={12} sm={6} md={4} lg={3}>
          <JobCard job={job} />
        </Grid>
      ))}
    </Grid>
  );
};
  
export default JobList ;
