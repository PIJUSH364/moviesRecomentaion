import { Box } from '@mui/material';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Store } from '../store/Store';

function MoviePoster({ data }) {
  const navigate = useNavigate();
  const { dispatch } = useContext(Store);

  const shownMovieDeatils = (item) => {
    navigate('../../moviedetails/'+item.id);
    dispatch({ type: 'SHOW_MOVIE_PREVIEW', payload: { ...item } });
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
