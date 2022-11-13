import { Box } from '@mui/material';
import React, { useState } from 'react';

function SelectButton() {
  const [selectvlue, setSelectvlue] = useState('all');
  const handleSelectValue = (e) => {
    setSelectvlue(e.target.value);
    console.log(selectvlue);
  };
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
          <option value="all">All genres</option>
          <option value="comedy">Comedy</option>
          <option value="action">Action</option>
          <option value="thriller">Thriller</option>
        </select>
      </Box>
    </>
  );
}

export default SelectButton;
