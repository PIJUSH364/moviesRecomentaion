import React from 'react';
import MoviesItem from '../category/MoviesItem';

function CastDeatils() {
  return (
    <div className="castDeatils--container">
      <div className="cast--overView">
        <div className="overview--left">
          <img src="" alt="cast-image" />
        </div>
        <div className="overview--right">
          <h4>cast--name</h4>
          <h6>cast--sub deatils</h6>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae nihil quasi odio soluta ad consectetur, facere ratione,
            dolorem sint illum neque, quidem aperiam? Ea ad officiis a tempore
            commodi harum?
          </p>
        </div>
      </div>
      <div className="cast--relatedMovies">
        <h4>Filmography</h4>
        <div
          className="cast--related--movies"
          style={{ display: 'flex', gap: '10px' }}
        >
          <MoviesItem /> <MoviesItem /> <MoviesItem /> <MoviesItem />{' '}
          <MoviesItem /> <MoviesItem />
        </div>
      </div>
    </div>
  );
}

export default CastDeatils;
