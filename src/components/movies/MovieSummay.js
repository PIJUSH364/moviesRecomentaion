import { Rating, Stack, Typography, Box } from '@mui/material';
import React from 'react';

function MovieSummay({ movieName, movieSummery, year, rating, catagory }) {
  console.log('outy', typeof rating);
  console.log(catagory);
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
      <Typography variant="h3" mt={2}>
        {movieName}
      </Typography>{' '}
      <Box className="slider--rating">
        <Box className="slider--imdb--rating">
          <span>
            <Box
              className="ratingTen"
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              &nbsp;
              <Rating
                name="read-only"
                size="medium"
                value={rating / 2}
                precision={0.1}
                readOnly
              />
              &nbsp; &#x2022; {rating}/10 &nbsp;
              <button className="button--imdb">IMDb </button>
            </Box>
          </span>
        </Box>
        <Box className="slider--content--deatils">
          <Typography variant="body1" className="ratingTen">
            {year}&nbsp;&#x2022; &nbsp;+10&nbsp;&#x2022;&nbsp;1hr 38min&nbsp;
            {catagory.slice(0, 2).map((e, key) => {
              return <span key={key}>&#x2022;&nbsp;{e}</span>;
            })}
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
