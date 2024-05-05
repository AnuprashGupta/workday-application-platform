import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const Filters = ({ filterOptions, onFilterChange }) => {
  return (

      <Toolbar>

        <TextField
          label="Min Experience"
          value={filterOptions.minExp}
          onChange={(e) => onFilterChange('minExp', e.target.value)}
          variant="outlined"
          size="small"
          sx={{ mr: 2, minWidth: 120 }}
          SelectProps={{ disableUnderline: true }}
        />

        <TextField
          label="Company Name"
          value={filterOptions.companyName}
          onChange={(e) => onFilterChange('companyName', e.target.value)}
          variant="outlined"
          size="small"
          sx={{ mr: 2, minWidth: 200 }}
        />

        <TextField
          label="Location"
          value={filterOptions.location}
          onChange={(e) => onFilterChange('location', e.target.value)}
          variant="outlined"
          size="small"
          sx={{ mr: 2, minWidth: 150 }}
        />

        <TextField
          select
          label="Remote/On-site"
          value={filterOptions.remote}
          onChange={(e) => onFilterChange('remote', e.target.value)}
          variant="outlined"
          size="small"
          sx={{ mr: 2, minWidth: 150 }}
        >
          <MenuItem value="remote">Remote</MenuItem>
          <MenuItem value="onsite">On-site</MenuItem>
        </TextField>

        <TextField
          label="Tech Stack"
          value={filterOptions.techStack}
          onChange={(e) => onFilterChange('techStack', e.target.value)}
          variant="outlined"
          size="small"
          sx={{ mr: 2, minWidth: 200 }}
        />

        <TextField
          label="Min Base Pay in lacs"
          value={filterOptions.minBasePay}
          onChange={(e) => onFilterChange('minBasePay', e.target.value)}
          variant="outlined"
          size="small"
          sx={{ minWidth: 180 }}
        />
      </Toolbar>

  );
};

export default Filters;
