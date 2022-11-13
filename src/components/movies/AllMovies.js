import { Box } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Nav from '../nav/Nav';
import MovieSummay from './MovieSummay';
import Sorting from './Sorting';

function AllMovies() {
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
        setMovieItem(data[8]);
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
      }}
      bgcolor="gray"
    >
      <Nav homeLink="/" movieLink="#" />
      <MovieSummay data={movieItem} />
      <Sorting data={movieData} />
    </Box>
  );
}

export default AllMovies;
