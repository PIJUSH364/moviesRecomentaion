import { Typography, Rating, Stack, Button, Box } from '@mui/material';
import React from 'react';
import Nav from '../nav/Nav';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import './slider.css';
import styled from '@emotion/styled';
const titleTag = {
  fontWeight: 800,
  fontSize: '2.7rem',
  fontFamily: 'Cairo',
  margin: 0,
};
const WatchButton = styled(Button)({
  backgroundColor: 'rgba(255,255,255,0.4)',
  color: '#fff',
  padding: '10px 18px',
  transition: 'all 1.2s ease-in-out',
  '&:hover': {
    background: '#fff',
    color: '#000',
  },
});
function Slider(props) {
  return (
    <Stack
      className="slider--component"
      sx={{
        padding: { xs: '0 1rem', lg: '0 3rem' },
        backgroundRepeat: ' no-repeat',
        backgroundSize: 'cover',
        minHeight: { xs: 'auto', md: 'auto', lg: '72vh', xl: '70vh' },
      }}
    >
      <Stack
        sx={{
          flexDirection: { xs: 'column', md: 'row', lg: 'row', xl: 'row' },
        }}
        justifyContent="space-between"
      >
        <Stack
          pt={5}
          className="slider--left"
          sx={{
            maxWidth: { xs: '100vw', md: '60vw', lg: '70vw', xl: '75vw' },
            color: '#fff',
          }}
        >
          <Typography variant="h3" pb={2}>
            All Quiet on the Western Front
          </Typography>

          <div className="slider--rating">
            <div className="slider--imdb--rating">
              <span>
                <Box
                  className="ratingTen"
                  sx={{ display: 'flex', alignItems: 'center' }}
                >
                  3.9/5 &nbsp;
                  <Rating name="read-only" size="medium" value={3.7} readOnly />
                  &nbsp; &#x2022; 6.1/10 &nbsp;
                  <button className="button--imdb">IMDb </button>
                </Box>
              </span>
            </div>
            <div className="slider--content--deatils">
              <p className="ratingTen">
                2015&nbsp;&#x2022; &nbsp;+10&nbsp;&#x2022;&nbsp;1hr
                38min&nbsp;&#x2022;&nbsp;&nbsp;Fantasy&#x2022;&nbsp;Horror
              </p>
            </div>
            <Typography
              variant="body1"
              className="slider-text"
              sx={{
                textAlign: 'justify',
              }}
            >
              Paul Baumer and his friends Albert and Muller, egged on by
              romantic dreams of heroism, voluntarily enlist in the German army.
              Full of excitement and patriotic fervour, the boys
              enthusiastically march into a war they believe in. But once on the
              Western Front, they discover the soul-destroying horror of World
              War I.
            </Typography>
          </div>
        </Stack>
        <Stack
          className="slider--right"
          sx={{
            justifyContent: 'flex-end',
            padding: { xs: '2rem 0', md: '0', lg: '0', xl: '0' },
            marginLeft: { xs: '2rem', md: '0', lg: '0', xl: '0' },
            maxWidth: { xs: '200px', md: '300px', lg: '300px', xl: '300px' },
          }}
        >
          <WatchButton startIcon={<PlayArrowIcon />}>Watch Now</WatchButton>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Slider;
