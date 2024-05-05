import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';

const Filters = ({ filterOptions, onFilterChange }) => {
  return (
    <Toolbar style={{ marginBottom: "2%" }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center" wrap="wrap">
        <Grid item xs={12} md={2}>
          <TextField
            label="Min Experience"
            value={filterOptions.minExp}
            onChange={(e) => onFilterChange('minExp', e.target.value)}
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <TextField
            label="Company Name"
            value={filterOptions.companyName}
            onChange={(e) => onFilterChange('companyName', e.target.value)}
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <TextField
            label="Location"
            value={filterOptions.location}
            onChange={(e) => onFilterChange('location', e.target.value)}
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <TextField
            select
            label="Remote/On-site"
            value={filterOptions.remote}
            onChange={(e) => onFilterChange('remote', e.target.value)}
            variant="outlined"
            size="small"
            fullWidth
          >
            <MenuItem value="remote">Remote</MenuItem>
            <MenuItem value="onsite">On-site</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} md={2}>
          <TextField
            label="Tech Stack"
            value={filterOptions.techStack}
            onChange={(e) => onFilterChange('techStack', e.target.value)}
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <TextField
            label="Min Base Pay in lacs"
            value={filterOptions.minBasePay}
            onChange={(e) => onFilterChange('minBasePay', e.target.value)}
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>
      </Grid>
    </Toolbar>
  );
};

export default Filters;
