import { Stack, Button } from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import data from '../store/data';
data;
const handleRating = () => {
  alert('handle rating');
};
const ratinng = data.sort(function (a, b) {
  return b.vote_average - a.vote_average;
});
const popularity = data.sort(function (a, b) {
  return b.vote_count - a.vote_count;
});

var yearDcending;
{
  // accening order year find
  function yearFind() {
    const year = data.map((e, key) => {
      return e.release_date.split('-', 1);
    });
    return year.flat(Infinity).map((e) => {
      return Number(e);
    });
  }
  yearDcending = yearFind().sort(function (a, b) {
    return b - a;
  });
}
// console.log(yearDcending);

{
  // movie name sorting
  const name = data.map((e) => {
    return e.name;
  });
  name.sort((a, b) => (a > b ? 1 : b > a ? -1 : 0));
  console.log(name);
}

function Sorting() {
  return (
    <Stack direction="row" spacing={5} m={5}>
      <Button
        variant="outlined"
        onClick={handleRating}
        startIcon={<DeleteIcon />}
      >
        rating
      </Button>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        popularity
      </Button>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        view
      </Button>
    </Stack>
  );
}

export default Sorting;
