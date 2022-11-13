import { Stack, Button, Box } from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import data from '../store/data';
import styled from '@emotion/styled';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DateRangeIcon from '@mui/icons-material/DateRange';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import SelectButton from './SelectButton';
import Cast from '../cast/Cast';
import MoviesItem from '../category/MoviesItem';
// {const handleRating = () => {
//   alert('handle rating');
// };
// const ratinng = data.sort(function (a, b) {
//   return b.vote_average - a.vote_average;
// });
// const popularity = data.sort(function (a, b) {
//   return b.vote_count - a.vote_count;
// });

// var yearDcending;
// {
//   // accening order year find
//   function yearFind() {
//     const year = data.map((e, key) => {
//       return e.release_date.split('-', 1);
//     });
//     return year.flat(Infinity).map((e) => {
//       return Number(e);
//     });
//   }
//   yearDcending = yearFind().sort(function (a, b) {
//     return b - a;
//   });
// }
// // console.log(yearDcending);

// {
//   // movie name sorting
//   const name = data.map((e) => {
//     return e.name;
//   });
//   name.sort((a, b) => (a > b ? 1 : b > a ? -1 : 0));
//   // console.log(name);
// }}
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
function Sorting() {
  return (
    <Stack direction="column">
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
        <Box>
          <SelectButton />
        </Box>
        <Stack
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
          <MovieButton startIcon={<QueryBuilderIcon />}>
            Watch Trailer
          </MovieButton>{' '}
          <MovieButton startIcon={<StarHalfIcon />}>Watch Trailer</MovieButton>{' '}
          <MovieButton startIcon={<VisibilityIcon />}>
            Watch Trailer
          </MovieButton>{' '}
          <MovieButton startIcon={<VisibilityIcon />}>
            Watch Trailer
          </MovieButton>{' '}
          <MovieButton startIcon={<TextFieldsIcon />}>
            Watch Trailer
          </MovieButton>{' '}
        </Stack>
      </Stack>
      <Stack direction="row" gap={5} flexWrap="wrap" mt={3}>
        <MoviesItem />
        <MoviesItem />
        <MoviesItem />
        <MoviesItem />
        <MoviesItem />
        <MoviesItem />
        <MoviesItem />
        <MoviesItem />
        <MoviesItem />
      </Stack>
    </Stack>
  );
}

export default Sorting;
