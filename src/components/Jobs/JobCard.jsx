// src/components/JobCard.js
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const JobCard = ({ job }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Card variant="outlined" style={{ marginBottom: '16px' }}>
      <CardContent>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
          <img src={job.logoUrl} alt="Company Logo" style={{ width: '64px', height: '64px', marginRight: '16px' }} />
          <div>
            <Typography variant="h5">{job.companyName}</Typography>
            <Typography variant="subtitle1">{job.jobRole}</Typography>
            <Typography variant="subtitle2" color="textSecondary">{job.location}</Typography>
          </div>
        </div>
        <Typography variant="body1" style={{ marginBottom: '16px' }}>
          Estimated Salary: {job.minJdSalary || 0} - {job.maxJdSalary || 'Something'} LPA
        </Typography>
        <div style={{ marginBottom: '16px' }}>
          <Typography variant="body1" style={{ marginBottom: '8px' }}>Job Details:</Typography>
          <Typography variant="body2">
            {expanded ? job.jobDetailsFromCompany : job.jobDetailsFromCompany.slice(0, 100) + '...'}
          </Typography>
          <Button onClick={toggleExpand} size="small">{expanded ? 'Read Less' : 'Read More'}</Button>
        </div>
        <Typography variant="body1" style={{ marginBottom: '16px' }}>
          Experience: {job.minExp} - {job.maxExp} years
        </Typography>
        <Button variant="contained" href={job.jdLink} target="_blank" rel="noopener noreferrer">Easy Apply</Button>
      </CardContent>
    </Card>
  );
};

export default JobCard;
