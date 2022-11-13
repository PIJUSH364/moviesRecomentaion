import { Stack, Button, Box, Typography, Avatar } from '@mui/material';
import React, { useState, useEffect } from 'react';
import data from '../store/data';
import styled from '@emotion/styled';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DateRangeIcon from '@mui/icons-material/DateRange';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import SelectButton from './SelectButton';
import MoviePoster from '../category/MoviePoster';

const MovieButton = styled(Button)({
  backgroundColor: 'rgba(255,255,255,0.5)',
  color: '#fff',
  fontSize: '15px',
  padding: '10px 20px',
  transition: 'all 1s ease-in-out',
  fontWeight: '600',
  fontFamily: 'monospace',
  maxWidth: '200px',
  '&:hover': {
    background: '#fff',
    color: '#000',
  },
});
function Sorting() {
  const [pageNo, setPageNo] = useState(1);
  const [moviesData, setmoviesData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    if (activeGenre === 0) {
      fetchData();
      setFiltered(moviesData);
      return;
    }
    const filterData = moviesData.filter((e, key) => {
      return e.genre_ids.includes(activeGenre);
    });
    setFiltered(filterData);
  }, [activeGenre, pageNo]);

  const fetchData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=b6d57f45c1ed674f27d2d36fd0ed479c&language=en-US&page=${pageNo}`
    );
    const data = await response.json();
    setmoviesData(data.results);
    setFiltered(data.results);
  };
  const handleSelectValue = (value) => {
    setActiveGenre(value);
  };
  const handlePrevPageNo = () => {
    if (pageNo > 1) {
      setPageNo((prevPage) => prevPage - 1);
    }
  };

  const handleNextPageNo = () => {
    if (pageNo < 5) {
      setPageNo((prevPage) => prevPage + 1);
    }
  };
  console.log(pageNo);
  // const handleSort = () => {
  //   console.log('handle sort');
  //   const popularity = moviesData.sort(function (a, b) {
  //     return b.vote_count - a.vote_count;
  //   });
  //   console.log(popularity);
  //   setFiltered(popularity);
  // };

  // const ratinng = data.sort(function (a, b) {
  //   return b.vote_average - a.vote_average;
  // });
  return (
    <Stack direction="column" mt={2}>
      <Stack
        justifyContent="space-between"
        sx={{
          flexDirection: {
            xs: 'column',
            sm: 'column',
            md: 'column',
            lg: 'row',
            xl: 'row',
          },
          gap: '5px',
        }}
      >
        <Stack direction="row" gap={1}>
          <MovieButton onClick={() => handleSelectValue(0)}>all</MovieButton>
          <MovieButton onClick={() => handleSelectValue(35)}>
            comedey
          </MovieButton>
          <MovieButton onClick={() => setActiveGenre(28)}>action</MovieButton>
        </Stack>
        {/* <Stack
          sx={{
            flexDirection: {
              xs: 'column',
              sm: 'column',
              md: 'row',
              lg: 'row',
              xl: 'row',
            },
            gap: '5px',
          }}
        >
          <MovieButton startIcon={<QueryBuilderIcon />}>newest</MovieButton>
          <MovieButton startIcon={<StarHalfIcon />} onClick={handleSort}>
            Rating
          </MovieButton>
          <MovieButton startIcon={<VisibilityIcon />}>Views</MovieButton>
          <MovieButton startIcon={<TextFieldsIcon />}>title</MovieButton>

          <MovieButton startIcon={<DateRangeIcon />}>Year</MovieButton>
        </Stack> */}
      </Stack>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))',
          gridRowGap: '2rem',
          gridColumnGap: '1rem',
          justifyItems: 'center',
        }}
        mt={3}
      >
        {filtered.map((e, key) => {
          return (
            <>
             
              <MoviePoster key={key} data={e} />
            </>
          );
        })}
      </Box>
      <Stack justifyContent="space-between" direction="row" p={2}>
        <MovieButton
          variant="contained"
          onClick={handlePrevPageNo}
          disabled={pageNo < 2 ? true : false}
        >
          pre
        </MovieButton>
        <Avatar>{pageNo}</Avatar>
        <MovieButton
          variant="contained"
          onClick={handleNextPageNo}
          disabled={pageNo < 5 ? false : true}
        >
          next
        </MovieButton>
      </Stack>
    </Stack>
  );
}

export default Sorting;
