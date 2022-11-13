import { Box, Stack, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { Store } from '../store/Store';
import MovieDeatils from './MovieDeatils';
import MovieSummay from './MovieSummay';
import Popular from './Popular';

function ActorDeatils({}) {
  const { state, dispatch } = useContext(Store);
  const { movies } = state;
  const { movieItem } = movies;
  const movieInfo = movieItem;
//   console.log(movieInfo);
  return (
    <>
      <Stack
        bgcolor="gray"
        p={4}
        sx={{
          color: '#fff',
          flexDirection: {
            xs: 'column',
            sm: 'row',
            md: 'row',
            lg: 'row',
            xl: 'row',
          },
        }}
      >
        {/* <Box className="movie--img" p={2} pl={0} pt={0}>
          <img
            className="actor--img"
            src="https://i.pinimg.com/564x/4f/6d/b1/4f6db17a0c09e38c5b1e2d9a7c418648.jpg"
            alt="movie--name"
            style={{
              width: '11rem',
              color: '#fff',
              transition: 'all 0.4s ease',
              position: 'relative',
              borderRadius: '0% 0% 0% 0% / 0% 0% 0% 0%',
              boxShadow: '20px 20px rgba(0, 0, 0, 0.23)',
            }}
          />
        </Box>
        <Box
          sx={{
            minHeight: '6rem',
            paddingLeft: {
              xs: '0',
              sm: '0',
              md: '1rem',
              lg: '1rem',
              xl: '5rem',
            },
          }}
        >
          <Typography variant="h3" mt={3}>
            Actor name
          </Typography>
          <Typography variant="subtitle2" className="ratingTen" mb={1}>
            {movieInfo.release_date.split('-', 1)}
            &nbsp;&#x2022; &nbsp;+10&nbsp;&#x2022;&nbsp;1hr
            38min&nbsp;&#x2022;&nbsp;&nbsp;Fantasy&#x2022;&nbsp;Horror
          </Typography>

          <Typography
            variant="body2"
            textAlign="justify"
            sx={{
              color: 'rgba(255,255,255,0.6)',
            }}
          >
            {movieInfo.overview}
          </Typography>
        </Box> */}
        <Popular />
      </Stack>
    </>
  );
}

export default ActorDeatils;
