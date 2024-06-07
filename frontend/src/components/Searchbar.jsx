import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';

const Searchbar = () => (
  <div className="searchBarContainer">
    <TextField
      variant="outlined"
      sx={{ '& .MuiOutlinedInput-root': { borderColor: 'green' } }}
      className="searchBar"
      placeholder="Search For Book By Title"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
    <button type="button">Search</button>
  </div>
);

export default Searchbar;
