import { Rating, Stack, Typography, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';

function MovieSummay({ data }) {
  const [catagory, setCatagory] = useState([]);
  useEffect(() => {
    {
      if (data.genre_ids?.includes(28)) {
        setCatagory((prevNames) => [...prevNames, 'Action']);
      }
      if (data.genre_ids?.includes(12)) {
        setCatagory((prevNames) => [...prevNames, 'Adventure']);
      }
      if (data.genre_ids?.includes(16)) {
        setCatagory((prevNames) => [...prevNames, 'Animation']);
      }
      if (data.genre_ids?.includes(35)) {
        setCatagory((prevNames) => [...prevNames, 'Comedy']);
      }
      if (data.genre_ids?.includes(80)) {
        setCatagory((prevNames) => [...prevNames, 'Crime']);
      }
      if (data.genre_ids?.includes(99)) {
        setCatagory((prevNames) => [...prevNames, 'Documentary ']);
      }
      if (data.genre_ids?.includes(18)) {
        setCatagory((prevNames) => [...prevNames, 'Drama']);
      }
      if (data.genre_ids?.includes(10751)) {
        setCatagory((prevNames) => [...prevNames, 'Family']);
      }
      if (data.genre_ids?.includes(14)) {
        setCatagory((prevNames) => [...prevNames, 'Fantasy']);
      }
      if (data.genre_ids?.includes(36)) {
        setCatagory((prevNames) => [...prevNames, 'History']);
      }
      if (data.genre_ids?.includes(10749)) {
        setCatagory((prevNames) => [...prevNames, 'Romance']);
      }
      if (data.genre_ids?.includes(878)) {
        setCatagory((prevNames) => [...prevNames, 'Science Fiction']);
      }
      if (data.genre_ids?.includes(10770)) {
        setCatagory((prevNames) => [...prevNames, 'TV Movie']);
      }
      if (data.genre_ids?.includes(53)) {
        setCatagory((prevNames) => [...prevNames, 'Thriller']);
      }
      if (data.genre_ids?.includes(10752)) {
        setCatagory((prevNames) => [...prevNames, 'War']);
      }
      if (data.genre_ids?.includes(37)) {
        setCatagory((prevNames) => [...prevNames, 'Western']);
      }
      if (data.genre_ids?.includes(9648)) {
        setCatagory((prevNames) => [...prevNames, 'Mystery']);
      } else {
        setCatagory((prevNames) => [...prevNames, 'All']);
      }
    }
  }, []);
  const rating = data.vote_average;
  return (
    <Stack
      className="movie--summery"
      sx={{
        paddingLeft: {
          xs: '0',
          sm: '0',
          md: '1rem',
          lg: '1rem',
          xl: '1rem',
        },
        color: '#fff',
      }}
    >
      <h1>{data.title}</h1>
      <Box className="slider--rating">
        <Box className="slider--imdb--rating">
          <span>
            <Box
              className="ratingTen"
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              &nbsp;
              <Rating
                name="read-only"
                size="medium"
                value={rating / 2}
                precision={0.1}
                readOnly
              />
              &nbsp; &#x2022; {data.vote_average}/10 &nbsp;
              <button className="button--imdb">IMDb </button>
            </Box>
          </span>
        </Box>
        <Box className="slider--content--deatils">
          <h4 className="ratingTen">
            {`${data.release_date?.split('-', 1)}`}&nbsp;&#x2022;
            &nbsp;+10&nbsp;&#x2022;&nbsp;1hr 38min&nbsp;
            {catagory?.slice(0, 2).map((e, key) => {
              return <span key={key}>&#x2022;&nbsp;{e}&nbsp;</span>;
            })}
          </h4>
        </Box>
        <Box style={{ minHeight: '6rem' }} pt={2} textAlign="justify">
          <p className='summery_text'>{data.overview}</p>
        </Box>
      </Box>
    </Stack>
  );
}

export default MovieSummay;
