import React from 'react';
import SwiperHome from './homeSlider/SwiperHome';
import { Typography, Box } from '@mui/material';
import TopRatedSlider from './homeSlider/TopRatedSlider';
import Nav from './nav/Nav';
import Tranding from './homeSlider/Tranding';

function Layout({ Children }) {
  return (
    <Box
      sx={{
        background: `url(https://image.tmdb.org/t/p/w500/mqsPyyeDCBAghXyjbw4TfEYwljw.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
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
        <Nav />
      </Box>
      <main>
        <SwiperHome />
      </main>
      <Box>
        <Box
          sx={{
            paddingLeft: { xs: '1rem', lg: '3rem' },
            color: '#fff',
          }}
        >
          <h1>Top Rated</h1>
          <TopRatedSlider />
          <h1> Tranding</h1>
          <Tranding />
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
