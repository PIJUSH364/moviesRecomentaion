import { Box, Button, IconButton, Tooltip } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MovieSummay from './MovieSummay';
import Sorting from './Sorting';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import rndInt from '../randomNumber';

function AllMovies() {
  const navigate = useNavigate();
  const [movieData, setmovieData] = useState([]);
  const [movieItem, setMovieItem] = useState({});
  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=b6d57f45c1ed674f27d2d36fd0ed479c&language=en-US&page=1'
      )
      .then(function (response) {
        // handle success
        const data = response.data.results;
        setmovieData(data);

        setMovieItem(data[rndInt]);
      })
      .catch(function (error) {
        // handle error
        console.log('error on data fetching toprated slider', error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return (
    <Box
      sx={{
        padding: {
          xs: '0 10px',
          sm: '0 1rem',
          md: '1rem',
          lg: '0 3rem',
          xl: '0 2rem',
        },
        background: `url(https://image.tmdb.org/t/p/w500${movieItem.backdrop_path})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        backgroundPosition: 'center',
      }}
      bgcolor="gray"
    >
      {' '}
      <span onClick={() => navigate(-1)}>
        <Box
          color="#fff"
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
          <Tooltip title="Home" placement="right" arrow>
            <IconButton aria-label="delete" size="large" color="primary">
              <ArrowBackIosIcon fontSize="inherit" color="inherit" />
            </IconButton>
          </Tooltip>
        </Box>
      </span>
      <MovieSummay data={movieItem} />
      <Sorting data={movieData} />
    </Box>
  );
}

export default AllMovies;
