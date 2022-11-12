import { Rating, Stack, Typography, Box } from '@mui/material';
import React from 'react';

function MovieSummay({
  movieName,
  outOfFive,
  outOfTen,
  movieSummery,
  year,
  rating,
}) {
  return (
    <Stack
      className="movie--summery"
      sx={{
        paddingLeft: {
          xs: '0',
          sm: '0',
          md: '1rem',
          lg: '1rem',
          xl: '1rem',
        },
      }}
    >
      <Typography variant="h3" mt={6}>
        {movieName}
      </Typography>{' '}
      <Box className="slider--rating">
        <Box className="slider--imdb--rating">
          <span>
            <Box
              className="ratingTen"
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              {outOfFive}
              &nbsp;
              <Rating name="read-only" size="medium" value={rating} readOnly />
              &nbsp; &#x2022; {outOfTen} &nbsp;
              <button className="button--imdb">IMDb </button>
            </Box>
          </span>
        </Box>
        <Box className="slider--content--deatils">
          <Typography variant="body1" className="ratingTen">
            {year}
            &nbsp;&#x2022; &nbsp;+10&nbsp;&#x2022;&nbsp;1hr
            38min&nbsp;&#x2022;&nbsp;&nbsp;Fantasy&#x2022;&nbsp;Horror
          </Typography>
        </Box>
        <Box style={{ minHeight: '6rem' }} pt={2}>
          <Typography variant="body1" textAlign="justify">
            {movieSummery}
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
}

export default MovieSummay;
