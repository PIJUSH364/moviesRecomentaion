import { Box } from '@mui/material';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Store } from '../store/Store';

function MoviePoster({ data }) {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(Store);
  // const { movies } = state;
  // const { movieItem } = movies;
  // const movieImfo = movieItem;

  const shownMovieDeatils = (item) => {
    navigate('moviedetails');
    dispatch({ type: 'SHOW_MOVIE_PREVIEW', payload: { ...item } });
    console.log('shownMovieDeatils', item);
  };
  return (
    <Box className="moviesItem--container">
      <img
        className="poster_hover"
        onClick={() => shownMovieDeatils(data)}
        src={'https://image.tmdb.org/t/p/w200' + data.poster_path}
        alt={data.title}
        style={{
          width: '140px',
          height: '200px',
          borderRadius: '10px',
        }}
      />
    </Box>
  );
}

export default MoviePoster;
