import React, { Children } from 'react';
import SwiperHome from './homeSlider/SwiperHome';
import { Typography, Stack, Box } from '@mui/material';
import Slider from './homeSlider/Slider';
import TopRatedSlider from './homeSlider/TopRatedSlider';
import Nav from './nav/Nav';

function Layout({ Children }) {
  return (
    <Box
      sx={{
        background: `url(https://images.unsplash.com/photo-1615966650071-855b15f29ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=966&q=80)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        // minHeight: '70vh',
      }}
    >
      <Box
        sx={{
          padding: {
            xs: '0 0.21rem',
            sm: '0 2rem',
            md: '0 1rem',
            lg: '0 3rem',
            xl: '0 3rem',
          },
        }}
      >
        <Nav homeLink="/" movieLink="movies" />
      </Box>
      <main>
        <SwiperHome />
      </main>
      <Box>
        <Box
          sx={{
            paddingLeft: { xs: '1rem', lg: '3rem' },
          }}
        >
          <Typography mt={1} variant="h4" color="#fff">
            Top Rated
          </Typography>{' '}
          {/* <TopRatedSlider /> */}
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
