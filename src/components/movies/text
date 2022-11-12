import { Stack } from '@mui/material';
import React, { useContext } from 'react';
import { Store } from '../store/Store';

function MovieSummay() {
  const { state, dispatch } = useContext(Store);
  const { movies } = state;
  const { movieItem } = movies;
  const movieInfo = movieItem;
  return (
    <Stack className="movie--summery" pl={3}>
      <Typography variant="h3" mt={6}>
        {/* {movieInfo.original_name} */}
      </Typography>
      <div className="slider--rating">
        <div className="slider--imdb--rating">
          <span>
            <Box
              className="ratingTen"
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              {`${movieInfo.vote_average / 2}/5`}
              &nbsp;
              <Rating
                name="read-only"
                size="medium"
                value={`${movieInfo.vote_average / 2}`}
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
  );
}

export default MovieSummay;
