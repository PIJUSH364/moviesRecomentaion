import React from 'react';
import './button.css';
import { Box } from '@mui/material';
// import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';

function ButtIcon(props) {
  return (
    <Box
      sx={{
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: '6px',
      }}
      p={1}
    >
      <SvgIcon component={props.icon} inheritViewBox sx={{ fontSize: 25 }} />
    </Box>
  );
}

export default ButtIcon;
