import React, { lazy, Suspense, useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Skeleton, Stack } from '@mui/material';
import PreRender from '../movies/PreRender';
import pageNo from './randomPageNo';
const MoviePoster = lazy(() => import('../category/MoviePoster'));

function Tranding() {
  const [trandingData, setTrandingData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=b6d57f45c1ed674f27d2d36fd0ed479c`
      )
      .then(function (response) {
        // handle success
        const data = response.data.results;
        setTrandingData(data);
      })
      .catch(function (error) {
        // handle error
        console.log('error on data fetching toprated slider', error);
      });
  }, []);
  return (
    <Box
      sx={{
        maxWidth: '90vw',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
        rowGap: '2rem',
        columnGap: '3rem',
        marginTop: '2rem',
        justifyItems: 'center',
      }}
    >
      {trandingData.length === 0 ? (
        <PreRender />
      ) : (
        trandingData.slice(0, 14).map((item, key) => {
          return (
            <Suspense key={key} fallback={<span>Loading...</span>}>
              <MoviePoster data={item} />
            </Suspense>
          );
        })
      )}
    </Box>
  );
}

export default Tranding;
