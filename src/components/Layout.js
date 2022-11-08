import React, { Children } from 'react';
import SwiperHome from './homeSlider/SwiperHome';
import MovieDeatils from './movies/MovieDeatils';
import MoviesItem from './category/MoviesItem';
import { Typography, Stack, Box } from '@mui/material';
import Slider from './homeSlider/Slider';
import TopRatedSlider from './homeSlider/TopRatedSlider';

function Layout() {
  return (
    <Box
      sx={{
        background:
          'linear-gradient(to right, rgba(0, 0, 0, 0.9) 10% ,#ccffff 90%)',
      }}
    >
      <SwiperHome />
      <Typography mt={2} variant="h5" color="#fff" pl={6}>
        Top Rated
      </Typography>
      <TopRatedSlider />
    </Box>
  );
}

export default Layout;
