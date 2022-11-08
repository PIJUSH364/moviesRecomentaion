import React, { useContext } from 'react';
import Cast from '../cast/Cast';
import { Typography, Stack, Box, Rating } from '@mui/material';
import Button from './Button';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import ButtIcon from './ButtIcon';
import { Store } from '../store/Store';
import MoviesItem from '../category/MoviesItem';
// import './moviesDetails.css';
function MovieDeatils() {
  const { state, dispatch } = useContext(Store);
  const { movies } = state;
  const { movieItem } = movies;
  const movieInfo = movieItem;

  console.log('moviescc deatils--', movieInfo);
  return (
    <Stack
      pt={5}
      style={{
        background: `url(
        'https://images.unsplash.com/photo-1554248951-825cf7479258?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
      )`,
        backgroundRepeat: ' no-repeat',
        backgroundPosition: 'auto',
        backgroundSize: 'cover',
        color: '#fff',
      }}
    >
      <Stack p={10} pt={0} pb={4}>
        <Stack className="movieDeatils--container" direction="row">
          <Box className="movie--img" p={2} pl={0} pt={0}>
            <img
              className="actor--img"
              src="https://i.pinimg.com/564x/4f/6d/b1/4f6db17a0c09e38c5b1e2d9a7c418648.jpg"
              alt="movie--name"
              style={{
                width: '11rem',
                color: '#fff',
                transition: 'all 0.4s ease',
                position: 'relative',
                borderRadius: '0% 0% 0% 0% / 0% 0% 0% 0%',
                boxShadow: '20px 20px rgba(0, 0, 0, 0.23)',
              }}
            />
          </Box>
          <Stack className="movie--summery" pl={3}>
            <Typography variant="h3" mt={6}>
              {/* {movieInfo.original_name} */}
              shy
            </Typography>
            <div className="slider--rating">
              <div className="slider--imdb--rating">
                <span>
                  <Box
                    className="ratingTen"
                    sx={{ display: 'flex', alignItems: 'center' }}
                  >
                    {`${10 / 2}/5`}
                    &nbsp;
                    <Rating
                      name="read-only"
                      size="medium"
                      value={`${10 / 2}`}
                      readOnly
                    />
                    &nbsp; &#x2022; {`${movieInfo.vote_average}/10`} &nbsp;
                    <button className="button--imdb">IMDb </button>
                  </Box>
                </span>
              </div>
              <div className="slider--content--deatils">
                <p className="ratingTen">
                  {`${movieInfo.release_date.split('-', 1)}`}
                  &nbsp;&#x2022; &nbsp;+10&nbsp;&#x2022;&nbsp;1hr
                  38min&nbsp;&#x2022;&nbsp;&nbsp;Fantasy&#x2022;&nbsp;Horror
                </p>
              </div>
              <div style={{ minHeight: '6rem' }} pt={10}>
                <Typography variant="body1" pt={2}>
                  {movieInfo.overview}
                </Typography>
              </div>
            </div>
            <Stack
              sx={{ justifyContent: 'space-between' }}
              direction="row"
              pt={2}
              pb={2}
            >
              <Stack className="button--left" direction="row" spacing={2}>
                <Button body="Watch Trailer" icon={PlayArrowIcon} />
                <Button body="Add To My List" icon={AddCircleIcon} />
                <Button body="Rate Serie" icon={StarBorderIcon} />
              </Stack>
              <Stack className="button--right" direction="row" spacing={1}>
                <ButtIcon icon={QuestionAnswerIcon} />{' '}
                <ButtIcon icon={StarBorderIcon} />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack className="cast-crew" style={{ display: 'flex' }} pt={1} pb={2}>
          <Typography variant="h6" gutterBottom pb={1}>
            Full Cast & Crew
          </Typography>
          <Stack direction="row" spacing={4}>
            <Cast />
            <Cast />
            <Cast />
            <Cast />
            <Cast />
          </Stack>
        </Stack>
      </Stack>
      <Box className="recomended--movesList" pl={10}>
        <Typography variant="h6" gutterBottom pb={2}>
          Releted movies
        </Typography>
        <Box className="movies--list" style={{ display: 'flex', gap: '2em' }}>
          <MoviesItem /> <MoviesItem /> <MoviesItem /> <MoviesItem />
        </Box>
      </Box>
    </Stack>
  );
}

export default MovieDeatils;
