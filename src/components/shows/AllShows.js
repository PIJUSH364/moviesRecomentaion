import { Stack } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import rndInt from '../randomNumber';

function AllShows() {
  const navigate = useNavigate();
  const [movieData, setmovieData] = useState([]);
  const [movieItem, setMovieItem] = useState({});
  // console.log(rndInt);
  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/trending/all/day?api_key=b6d57f45c1ed674f27d2d36fd0ed479c'
      )
      .then(function (response) {
        // handle success
        const data = response.data.results;
        setmovieData(data);

        setMovieItem(data[rndInt]);
      })
      .catch(function (error) {
        console.log('error on data fetching toprated slider', error);
      });
  }, []);
  console.log(movieData);
  return (
    <Stack direction="row" flexWrap="wrap" gap={2}>
      {movieData.map((e, key) => {
        return (
          <div key={key}>
            <h3>{e.title}</h3>

            <img
              className="poster_hover"
              src={'https://image.tmdb.org/t/p/w200' + e.poster_path}
              alt={e.title}
              style={{
                width: '140px',
                height: '200px',
                borderRadius: '10px',
              }}
            />
          </div>
        );
      })}
    </Stack>
  );
}

export default AllShows;
