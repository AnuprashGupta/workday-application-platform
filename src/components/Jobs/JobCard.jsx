
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const JobCard = ({ job }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {job.title}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {job.company}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {job.location}
        </Typography>
        <Typography variant="body2" component="p">
          {job.description}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Experience Required: {job.experience}
        </Typography>
        <a href={job.applyLink} target="_blank" rel="noopener noreferrer">
          Apply
        </a>
      </CardContent>
    </Card>
  );
};

export default JobCard;
