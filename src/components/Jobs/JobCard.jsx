import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

const JobCard = ({ job }) => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Card variant="elevation" elevation={3} style={{ marginBottom: '16px', width: 'calc(100% - 32px)' }}>
      <CardContent>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
          <img src={job.logoUrl} alt="Company Logo" style={{ width: '64px', height: '64px', marginRight: '16px' }} />
          <div>
            <Typography variant="h5" style={{ fontFamily: theme.typography.fontFamily }}>{job.companyName}</Typography>
            <Typography variant="subtitle1" style={{ fontFamily: theme.typography.fontFamily }}>{job.jobRole}</Typography>
            <Typography variant="subtitle2" color="textSecondary" style={{ fontFamily: theme.typography.fontFamily }}>{job.location}</Typography>
          </div>
        </div>
        <Typography variant="body1" style={{ marginBottom: '16px', fontFamily: theme.typography.fontFamily }}>
          Estimated Salary: {job.minJdSalary || 0} - {job.maxJdSalary || 'Something'} LPA
        </Typography>
        <div style={{ marginBottom: '16px' }}>
          <Typography variant="body1" style={{ marginBottom: '8px', fontFamily: theme.typography.fontFamily, fontWeight: 'bold' }}>Job Details:</Typography>
          <Typography variant="body2" style={{ fontFamily: theme.typography.fontFamily, color: 'grey' }}>
            {expanded ? job.jobDetailsFromCompany : job.jobDetailsFromCompany.slice(0, 100) + '...'}
          </Typography>
          <Button onClick={toggleExpand} size="small" style={{ fontFamily: theme.typography.fontFamily, color: 'black' }}>{expanded ? 'Read Less' : 'Read More'}</Button>
        </div>
        <Typography variant="body1" style={{ marginBottom: '16px', fontFamily: theme.typography.fontFamily }}>
          Experience: {job.minExp} - {job.maxExp} years
        </Typography>
        <Button variant="contained" href={job.jdLink} target="_blank" rel="noopener noreferrer">Easy Apply</Button>
      </CardContent>
    </Card>
  );
};

export default JobCard;
