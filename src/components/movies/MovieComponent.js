import { Box, Typography } from '@mui/material';
import React from 'react';

function MovieComponent({ tittle, img }) {
  return (
    <Box m={3}>
      <Typography>{tittle}</Typography>
      <Box maxWidth={75}>
        <img src={'https://image.tmdb.org/t/p/w200' + img} alt="poster" />
      </Box>
    </Box>
  );
}

export default MovieComponent;
