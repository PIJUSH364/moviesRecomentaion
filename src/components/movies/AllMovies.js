import { Box } from '@mui/material';
import React from 'react';
import Nav from '../nav/Nav';
import MovieSummay from './MovieSummay';
import Sorting from './Sorting';

function AllMovies() {
  
  return (
    <Box
      sx={{
        padding: {
          xs: '0 10px',
          sm: '0 1rem',
          md: '1rem',
          lg: '0 3rem',
          xl: '2rem',
        },
        background: `url(https://images.unsplash.com/photo-1615966650071-855b15f29ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=966&q=80)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        // minHeight: '70vh',
      }}
      bgcolor="gray"
    >
      <Nav />
      <MovieSummay />
      <Sorting />
    </Box>
  );
}

export default AllMovies;
