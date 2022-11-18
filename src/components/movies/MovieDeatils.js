import React, { useContext, useEffect, useState } from 'react';
import { Typography, Stack, Box, Button, IconButton } from '@mui/material';
import { Store } from '../store/Store';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ButtIcon from './ButtIcon';
import styled from '@emotion/styled';
import MovieSummay from './MovieSummay';
import Cast from '../cast/Cast';
import MoviePoster from '../category/MoviePoster';
import axios from 'axios';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import PreRender from './PreRender';
import pageNo from '../homeSlider/randomPageNo';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const MovieButton = styled(Button)({
  backgroundColor: 'rgba(255,255,255,0.5)',
  color: '#fff',
  fontSize: {
    xs: '0.51rem',
    sm: '1rem',
    md: '1rem',
    lg: '1rem',
    xl: '1rem',
  },
  padding: {
    xs: '3rem',
    sm: '3rem',
    md: '1rem',
    lg: '1rem',
    xl: '1rem',
  },

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
  const navigate = useNavigate();
  const [movieData, setmovieData] = useState([]);
  const [review, setReview] = useState(false);
  const { state, dispatch } = useContext(Store);
  const { movies } = state;
  const { movieItem, favMovie } = movies;
  const movieInfo = movieItem;
  const [favData, setFavData] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=b6d57f45c1ed674f27d2d36fd0ed479c&language=en-US&page=${pageNo}`
      )
      .then(function (response) {
        // handle success
        const data = response.data.results;
        // console.log('data', data);
        setmovieData(data);
      })
      .catch(function (error) {
        // handle error
        console.log('error on data fetching toprated slider', error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  const addToFav = () => {
    dispatch({ type: 'ADD_TO_FAV', payload: { ...favData } });
    if (!review) {
      setReview(true);
    } else {
      setReview(false);
    }
  };
  return (
    <Stack
      sx={{
        background: `url(
          'https://image.tmdb.org/t/p/w500${movieInfo.backdrop_path}'
        )`,
        backgroundRepeat: ' no-repeat',
        backgroundPosition: 'auto',
        backgroundSize: 'cover',
        color: '#fff',
        width: '100%',
        backgroundAttachment: 'fixed',
        padding: {
          xs: '1rem',
          sm: '1rem',
          md: '1rem',
        },
        // height: '100vh',
      }}
    >
      <span onClick={() => navigate('/')}>
        <Box
          sx={{
            paddingBottom: {
              xs: '1rem',
              sm: '0.5rem',
              md: '3px',
              lg: '3px',
              xl: '0',
            },
          }}
        >
          <IconButton aria-label="delete" size="large" color="primary">
            <ArrowBackIosIcon fontSize="inherit" />
          </IconButton>
          Home
        </Box>
      </span>
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
              src={'https://image.tmdb.org/t/p/w500' + movieInfo.poster_path}
              alt="poster"
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
            <MovieSummay data={movieInfo} />
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
                direction="row"
                sx={{
                  gap: '1rem',
                }}
              >
                <MovieButton startIcon={<PlayArrowIcon />}>
                  Watch Trailer
                </MovieButton>
                <MovieButton
                  onClick={addToFav}
                  startIcon={review ? <CheckCircleIcon /> : <AddCircleIcon />}
                >
                  Add To My List
                </MovieButton>
              </Stack>
            </Stack>
          </Box>
        </Stack>
        <Stack
          className="cast-crew"
          style={{ display: 'flex', flexWrap: 'wrap' }}
          pt={1}
          pb={1}
        >
          <Typography variant="h6" pb={2}>
            Full Cast & Crew
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap={2}>
            <Cast />
          </Stack>
        </Stack>
      </Stack>
      <Box
        className="recomended--movesList"
        sx={{
          paddingLeft: { xs: '0.31rem', md: '2rem', lg: '2rem' },
        }}
      >
        <Typography variant="h6" gutterBottom pb={2}>
          Releted movies
        </Typography>
        <Stack
          className="movies--list"
          direction="row"
          justifyContent="space-evenly"
          style={{ display: 'flex', flexWrap: 'wrap', gap: '2em' }}
        >
          {/* related movie render here */}
          {movieData.length === 0 ? (
            <PreRender />
          ) : (
            movieData
              .slice(3, 19)
              .map((e, key) => (
                <MoviePoster data={e} key={key} setReview={setReview} />
              ))
          )}
        </Stack>
      </Box>
    </Stack>
  );
}

export default MovieDeatils;
