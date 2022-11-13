import { Box, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import FilterButton from './FilterButton';
import MovieComponent from './MovieComponent';

function Popular() {
  const [moviesData, setmoviesData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=b6d57f45c1ed674f27d2d36fd0ed479c&language=en-US&page=1'
    );
    const data = await response.json();
    setmoviesData(data.results);
    setFiltered(data.results);
  };
  console.log(filtered);
  return (
    <div>
      Popular movie
      <FilterButton
        data={moviesData}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <Stack direction="row" flexWrap="wrap">
        {filtered.map((e, key) => {
          return (
            <MovieComponent
              key={key}
              tittle={e.title}
              img={e.poster_path}
            ></MovieComponent>
          );
        })}
      </Stack>
    </div>
  );
}

export default Popular;
