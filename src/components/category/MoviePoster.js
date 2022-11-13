import { Box } from '@mui/material';
import React from 'react';

function MoviePoster({ data }) {
  return (
    <Box className="moviesItem--container">
      <img
        src={'https://image.tmdb.org/t/p/w200' + data.poster_path} 
        alt={data.title}
        style={{ width: '140px', height: '200px', borderRadius: '10px' }}
      />
    </Box>
  );
}

export default MoviePoster;
