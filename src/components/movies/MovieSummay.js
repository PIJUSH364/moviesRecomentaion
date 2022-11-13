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
        color: '#fff',
      }}
    >
      <Typography variant="h3" mt={6}>
        Black Panther: Wakanda Forever
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
              <Rating
                name="read-only"
                size="medium"
                value={4.5}
                precision={0.1}
                readOnly
              />
              &nbsp; &#x2022; {outOfTen} &nbsp;
              <button className="button--imdb">IMDb </button>
            </Box>
          </span>
        </Box>
        <Box className="slider--content--deatils">
          <Typography variant="body1" className="ratingTen">
            2018 &nbsp;&#x2022; &nbsp;+10&nbsp;&#x2022;&nbsp;1hr
            38min&nbsp;&#x2022;&nbsp;&nbsp;Fantasy&#x2022;&nbsp;Horror
          </Typography>
        </Box>
        <Box style={{ minHeight: '6rem' }} pt={2}>
          <Typography variant="body1" textAlign="justify">
            Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to
            protect their nation from intervening world powers in the wake of
            King T’Challa’s death. As the Wakandans strive to embrace their next
            chapter, the heroes must band together with the help of War Dog
            Nakia and Everett Ross and forge a new path for the kingdom of
            Wakanda.
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
}

export default MovieSummay;
