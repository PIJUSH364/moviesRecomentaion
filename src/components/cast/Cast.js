import { Stack, Typography } from '@mui/material';
import React from 'react';
function Cast() {
  return (
    <Stack
      flexDirection="column"
      alignItems="center"
      className="cast--container"
    >
      <img
        src="https://images.mubicdn.net/images/cast_member/2184/cache-2992-1547409411/image-w856.jpg?size=800x"
        alt="cast--name"
        style={{
          width: '3em',
          borderRadius: '50%',
          border: '3px solid rgba(255, 255, 255, 0.412)',
          marginBottom: '0.4em',
        }}
      />
      <Typography variant="body1">Tom Cruise</Typography>
    </Stack>
  );
}

export default Cast;
