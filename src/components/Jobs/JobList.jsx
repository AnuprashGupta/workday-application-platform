
import React from 'react';
import {  Grid, Typography } from '@mui/material';
import JobCard from './JobCard';
const JobList = ({ jobs }) => {
    if (!jobs || jobs.length === 0) {
      return <Typography variant="body1">No jobs found.</Typography>;
    }
    return (
      <div>
        <Grid container spacing={3}>
          {jobs.map(job => (
            <Grid item xs={12} key={job.id}>
              <JobCard job={job} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  };
  
export default JobList ;
