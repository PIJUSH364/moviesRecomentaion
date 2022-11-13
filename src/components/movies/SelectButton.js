import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';

function SelectButton({ data, setFiltered, activeGenre, setActiveGenre }) {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(data);
      return;
    }
    const filterData = data.filter((e) => {
      return e.genre_ids.includes(activeGenre);
    });
    setFiltered(filterData);
  }, [activeGenre]);

  const handleSelectValue = (e) => {
    setActiveGenre(e.target.value);
  };
  console.log(activeGenre);
  return (
    <>
      <Box
        pr={1}
        sx={{
          border: '2px solid rgba(255,255,255,0.4)',
          borderRadius: '5px',
          maxWidth: '180px',
          backgroundColor: 'rgba(255,255,255,0.6)',
        }}
      >
        <select
          name="movie_type"
          id=""
          onClick={handleSelectValue}
          style={{
            padding: '10px 15px',
            fontSize: '18px',
            border: 'none',
            fontFamily: 'monospace',
            outline: 'none',
            backgroundColor: 'rgba(255,255,255,0.6)',
          }}
        >
          <option value="0">All genres</option>
          <option value="35">Comedy</option>
          <option value="28">Action</option>
        </select>
      </Box>
    </>
  );
}

export default SelectButton;
