import React, { useContext } from 'react';
import Cast from '../cast/Cast';
import { Typography, Stack, Box, Rating, Button } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ButtIcon from './ButtIcon';
import { Store } from '../store/Store';
import MoviesItem from '../category/MoviesItem';
import styled from '@emotion/styled';
import MovieSummay from './MovieSummay';
// import './moviesDetails.css';
const MovieButton = styled(Button)({
  backgroundColor: 'rgba(255,255,255,0.5)',
  color: '#fff',
  fontSize: '15px',
  padding: '10px 18px',
  transition: 'all 1s ease-in-out',
  fontWeight: '600',
  fontFamily: 'monospace',
  maxWidth: '200px',
  '&:hover': {
    background: '#fff',
    color: '#000',
  },
});
function MovieDeatils() {
  const { state, dispatch } = useContext(Store);
  const { movies } = state;
  const { movieItem } = movies;
  const movieInfo = movieItem;

  console.log('moviescc deatils--', movieInfo);
  return (
    <Stack
      sx={{
        background: `url(
          'https://images.unsplash.com/photo-1554248951-825cf7479258?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        )`,
        backgroundRepeat: ' no-repeat',
        backgroundPosition: 'auto',
        backgroundSize: 'cover',
        color: '#fff',
        width: '100%',
        padding: {
          xs: '1rem',
          sm: '1rem',
          md: '1rem',
        },
      }}
    >
      <Stack
        sx={{
          padding: {
            xs: '0',
            sm: '0',
            md: '4rem 3rem',
            lg: '4rem 3rem',
            xl: '4rem 3rem',
          },
        }}
      >
        <Stack
          className="movieDeatils--container"
          direction="row"
          sx={{
            flexDirection: {
              xs: 'column',
              sm: 'column',
              md: 'row',
              lg: 'row',
              xl: 'row',
            },
          }}
        >
          <Box className="movie--img" p={2} pl={0} pt={0}>
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
          <Box>
            <MovieSummay
              movieName={movieInfo.original_name}
              outOfFive={`${movieInfo.vote_average / 2}/5`}
              outOfTen={`${movieInfo.vote_average}/10`}
              movieSummery={movieInfo.overview}
              year={`${movieInfo.release_date.split('-', 1)}`}
              rating={movieInfo.vote_average / 2}
            />
            <Stack
              sx={{
                flexDirection: {
                  xs: 'row',
                  sm: 'column',
                  md: 'column',
                  lg: 'row',
                  xl: 'row',
                },
                paddingLeft: {
                  xs: '0',
                  sm: '0',
                  md: '1rem',
                  lg: '1rem',
                  xl: '1rem',
                },
                justifyContent: 'space-between',
                gap: '1rem',
              }}
              pt={2}
              pb={2}
            >
              <Stack
                className="button--left"
                sx={{
                  flexDirection: {
                    xs: 'column',
                    sm: 'row',
                    md: 'row',
                    lg: 'row',
                    xl: 'row',
                  },
                  gap: '1rem',
                }}
              >
                <MovieButton startIcon={<PlayArrowIcon />}>
                  Watch Trailer
                </MovieButton>
                <MovieButton startIcon={<AddCircleIcon />}>
                  Add To My List
                </MovieButton>
                <MovieButton startIcon={<StarBorderIcon />}>
                  Rate Serie
                </MovieButton>
              </Stack>
              <Stack
                className="button--right"
                spacing={1}
                sx={{
                  justifyContent: {
                    xs: 'space-between',
                    sm: 'space-between',
                    md: 'space-between',
                    lg: 'flex-end',
                    xl: 'flex-end',
                  },
                  flexDirection: {
                    xs: 'column',
                    sm: 'row',
                    md: 'row',
                    lg: 'row',
                    xl: 'row',
                  },
                  gap: '10px',
                  alignItems: 'center',
                  alignContent: 'center',
                }}
              >
                <ButtIcon icon={QuestionAnswerIcon} />
                <ButtIcon icon={StarBorderIcon} />
              </Stack>
            </Stack>
          </Box>
        </Stack>
        <Stack
          className="cast-crew"
          style={{ display: 'flex', flexWrap: 'wrap' }}
          pt={1}
          pb={2}
        >
          <Typography variant="h6" gutterBottom pb={1}>
            Full Cast & Crew
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap={2}>
            <Cast />
            <Cast />
            <Cast />
            <Cast />
            <Cast />
          </Stack>
        </Stack>
      </Stack>
      <Box className="recomended--movesList">
        <Typography variant="h6" gutterBottom pb={2}>
          Releted movies
        </Typography>
        <Stack
          className="movies--list"
          direction="row"
          style={{ display: 'flex', flexWrap: 'wrap', gap: '2em' }}
        >
          <MoviesItem /> <MoviesItem /> <MoviesItem /> <MoviesItem />
        </Stack>
      </Box>
    </Stack>
  );
}

export default MovieDeatils;
