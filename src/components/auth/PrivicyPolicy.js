import { Box, Stack, Typography, TextField } from '@mui/material';
import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/material/styles';
import FormButton from '../movies/FormButton';
function PrivicyPolicy() {
  return (
    <Stack p={2}>
      <Box className="application--logo" mb={5} mt={3}>
        <img
          style={{ width: '5rem' }}
          src="https://fh-sites.imgix.net/sites/1715/2018/09/07203547/San-Francisco-Movie-Tours-Logo.png?auto=compress%2Cformat&w=1024&h=1024&fit=max"
          alt="app--logo"
        />
      </Box>{' '}
      <Typography variant="h6" textAlign="left" gutterBottom>
        Privacy Policy !
      </Typography>
      <Typography variant="body1" textAlign="left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
        deleniti, nihil nobis obcaecati libero nesciunt illum optio dolore ut
        earum reprehenderit rerum eum, dolores autem harum voluptas similique
        sequi sed commodi. Sed voluptate similique soluta odio labore dolor
        saepe enim provident est excepturi corrupti culpa eos necessitatibus rem
        minima accusantium voluptatem nam eaque beatae, reiciendis magnam. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Labore deleniti,
        nihil nobis obcaecati libero nesciunt illum optio dolore ut earum
        reprehenderit rerum eum, dolores autem harum voluptas similique sequi
        sed commodi. Sed voluptate similique soluta odio labore dolor saepe enim
        provident est excepturi corrupti culpa eos necessitatibus rem minima
        accusantium voluptatem nam eaque beatae, reiciendis magnam.
      </Typography>
    </Stack>
  );
}

export default PrivicyPolicy;
