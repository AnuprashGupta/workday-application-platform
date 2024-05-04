
import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const Filters = ({ filterOptions, onFilterChange }) => {
  return (
    <div className="filters">
      <TextField
        select
        label="Min Experience"
        value={filterOptions.minExp}
        onChange={(e) => onFilterChange('minExp', e.target.value)}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((exp) => (
          <MenuItem key={exp} value={exp}>{exp}</MenuItem>
        ))}
      </TextField>

      <TextField
        label="Company Name"
        value={filterOptions.companyName}
        onChange={(e) => onFilterChange('companyName', e.target.value)}
      />

      <TextField
        label="Location"
        value={filterOptions.location}
        onChange={(e) => onFilterChange('location', e.target.value)}
      />

      <TextField
        select
        label="Remote/On-site"
        value={filterOptions.remote}
        onChange={(e) => onFilterChange('remote', e.target.value)}
      >
        <MenuItem value="remote">Remote</MenuItem>
        <MenuItem value="on-site">On-site</MenuItem>
      </TextField>

      <TextField
        label="Tech Stack"
        value={filterOptions.techStack}
        onChange={(e) => onFilterChange('techStack', e.target.value)}
      />

      <TextField
        label="Role"
        value={filterOptions.role}
        onChange={(e) => onFilterChange('role', e.target.value)}
      />

      <TextField
        label="Min Base Pay"
        value={filterOptions.minBasePay}
        onChange={(e) => onFilterChange('minBasePay', e.target.value)}
      />
    </div>
  );
};

export default Filters;
