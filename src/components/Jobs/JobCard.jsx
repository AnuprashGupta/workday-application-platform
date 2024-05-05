import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

const JobCard = ({ job }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Card variant="elevation" elevation={3} style={{ marginBottom: '2%', width: 'calc(100% - 32px)', borderRadius: 15 }}>
      <CardContent>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2%' }}>
          <Avatar alt="Company Logo" src={job.logoUrl} style={{ width: '64px', height: '64px', marginRight: '2%' }} />
          <div>
            <Typography variant="h6" style={{ fontFamily: "Lato", fontWeight: 600, fontStyle: "italic", color: "grey", fontSize: "18px" }}>{job.companyName}</Typography>
            <Typography variant="subtitle1" style={{ fontFamily: "Lato", fontWeight: 500, fontStyle: "normal", fontSize: "18px" }}>{job.jobRole}</Typography>
            <Typography variant="subtitle2" style={{ fontFamily: "Lato", fontWeight: 700, fontStyle: "normal", fontSize: "14px" }}>{job.location}</Typography>
          </div>
        </div>
        <Typography variant="body1" color="textSecondary" style={{ marginBottom: '2%', fontFamily: "Lato", fontWeight: "800", fontStyle: "normal", fontSize: "14px" }}>
          Estimated Salary: {job.minJdSalary || 0} - {job.maxJdSalary || 'Something'} LPA
        </Typography>
        <div style={{ marginBottom: '2%' }}>
          <Typography variant="body1" style={{ marginBottom: '8px', fontFamily: "Lato", fontWeight: 'bold', }}>Job Details:</Typography>
          <Typography variant="body2" style={{ color: 'grey', maxHeight: expanded ? 'none' : '100px', overflow: 'hidden', transition: 'max-height 0.5s', fontFamily: "Lato" }}>
            {job.jobDetailsFromCompany}
          </Typography>
          <Button onClick={toggleExpand} size="small" style={{ fontFamily: "Lato", color: 'black', alignSelf: "center", display: "flex" }}>{expanded ? 'Read Less' : 'Read More'}</Button>
        </div>
        <Typography variant="body1" style={{ marginBottom: '16px', fontFamily: "Lato"}}>
          Experience: {job.minExp} - {job.maxExp} years
        </Typography>
        <Button variant="contained" href={job.jdLink} target="_blank" rel="noopener noreferrer" fullWidth style={{ backgroundColor: "#0EA5E9", color: 'black', fontWeight: 'bold', fontFamily: "Lato" }}>Easy Apply</Button>
      </CardContent>
    </Card>
  );
};

export default JobCard;
