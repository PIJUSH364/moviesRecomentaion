import { Skeleton, Stack } from '@mui/material';
import React from 'react';

function PreRender() {
  return (
    <Stack
      direction="row"
      gap={2}
      sx={{
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
    >
      <Skeleton
        sx={{
          bgcolor: 'grey.500',
          width: '140px',
          height: '200px',
          borderRadius: '10px',
        }}
        variant="rounded"
        animation="wave"
      />
      <Skeleton
        sx={{
          bgcolor: 'grey.500',
          width: '140px',
          height: '200px',
          borderRadius: '10px',
        }}
        variant="rounded"
        animation="wave"
      />
      <Skeleton
        sx={{
          bgcolor: 'grey.500',
          width: '140px',
          height: '200px',
          borderRadius: '10px',
        }}
        variant="rounded"
        animation="wave"
      />
      <Skeleton
        sx={{
          bgcolor: 'grey.500',
          width: '140px',
          height: '200px',
          borderRadius: '10px',
        }}
        variant="rounded"
        animation="wave"
      />
      <Skeleton
        sx={{
          bgcolor: 'grey.500',
          width: '140px',
          height: '200px',
          borderRadius: '10px',
        }}
        variant="rounded"
        animation="wave"
      />
      <Skeleton
        sx={{
          bgcolor: 'grey.500',
          width: '140px',
          height: '200px',
          borderRadius: '10px',
        }}
        variant="rounded"
        animation="wave"
      />
    </Stack>
  );
}

export default PreRender;
