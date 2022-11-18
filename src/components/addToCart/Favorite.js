import { Box, Typography } from '@mui/material';
import React from 'react';

function Favorite() {
  return (
    <Box
      p={1}
      textAlign="center"
      sx={{
        height: '100vh',
        color: '#fff',
        backgroundColor: 'rgba(0,0,0,0.8)',
        paddingTop: {
          xs: '20vh',
          sm: '23vh',
          md: '10vh',
          lg: '2vh',
          xl: '5vh',
        },
      }}
    >
      <Box>
        <img
          style={{
            objectFit: 'cover',
            width: '30vw',
          }}
          src="https://cdni.iconscout.com/illustration/premium/thumb/business-startup-3349923-2815874.png"
          alt="empty--list"
        />
      </Box>
      <Typography
        sx={{
          fontSize: {
            xs: '2rem',
            sm: '3.6rem',
            md: '4rem',
            lg: '3.7rem',
            xl: '3.8rem',
          },
        }}
      >
        Empty list,nothing here!
      </Typography>
      <Typography
        sx={{
          fontSize: {
            xs: '1rem',
            sm: '1.6rem',
            md: '2rem',
            lg: '1.4rem',
            xl: '1.8rem',
          },
        }}
      >
        Please add some content to your list then back!
      </Typography>
    </Box>
  );
}

export default Favorite;
