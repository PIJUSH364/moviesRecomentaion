import React from 'react';
import './button.css';
import { Stack, SvgIcon } from '@mui/material';
function Button(props) {
  return (
    <Stack
      className="button--container"
      direction="row"
      sx={{ alignItems: 'center' }}
    >
      <SvgIcon component={props.icon} inheritViewBox sx={{ fontSize: 25 }} />
      &nbsp;&nbsp;
      <button className="Custom--button">{props.body}</button>
    </Stack>
  );
}

export default Button;
