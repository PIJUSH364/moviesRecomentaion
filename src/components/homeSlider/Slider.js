import { Typography, Rating, Stack, Button, Box } from '@mui/material';
import React from 'react';
import Nav from '../nav/Nav';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import './slider.css';
const titleTag = {
  fontWeight: 800,
  fontSize: '2.7rem',
  fontFamily: 'Cairo',
  margin: 0,
};
function Slider(props) {
  return (
    <Stack
      className="slider--component"
      pl={6}
      pr={6}
      pt={5}
      style={{
        background: `url(${props.img})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '78vh',
      }}
    >
      <Nav />
      <Stack direction="row" justifyContent="space-between">
        <Stack
          className="slider--left"
          sx={{
            maxWidth: '65vw',
            color: '#fff',
          }}
          pt={6}
          pb={3}
        >
          <Typography variant="h3" pb={2}>
            Breaking bad
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
                {' '}
                2015&nbsp;&#x2022; &nbsp;+10&nbsp;&#x2022;&nbsp;1hr
                38min&nbsp;&#x2022;&nbsp;&nbsp;Fantasy&#x2022;&nbsp;Horror
              </p>
            </div>
            <p className="slider-text">
              Unlucky assassin Ladybug (Brad Pitt) is determined to do his job
              peacefully after one too many gigs has gone off the rails. Fate
              has other plans, however: Ladybug's latest mission puts him on a
              collision course with lethal adversaries from around the
              globe--all with connected, yet conflicting, objectives--on the
              world's fastest train
            </p>
          </div>
        </Stack>
        <Stack className="slider--right" justifyContent="flex-end">
          <Button variant="contained" startIcon={<PlayArrowIcon />}>
            Watch Now
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Slider;
